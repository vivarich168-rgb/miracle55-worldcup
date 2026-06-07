// คำนวณแต้มแบบกันบวกซ้ำ
async function calculateAndSaveScores(matchKey) {
    console.log('เริ่มคำนวณแต้ม:', matchKey);

    const { data: match, error: matchError } = await supabaseClient
        .from('matches')
        .select('match_key, team_a, team_b, actual_score_a, actual_score_b, actual_winner, is_finished')
        .eq('match_key', matchKey)
        .single();

    if (matchError || !match) {
        console.error('ไม่พบข้อมูลผลการแข่งขันจริง:', matchError);
        alert('ไม่พบ match_key นี้ในตาราง matches');
        return;
    }
    if (!match.is_finished) {
        alert('คู่นี้ยังไม่ได้ตั้งสถานะจบการแข่งขัน');
        return;
    }

    const { data: predictions, error: predError } = await supabaseClient
        .from('predictions')
        .select('*')
        .eq('match_key', matchKey);

    if (predError) {
        console.error('ดึงข้อมูลการทายผลไม่สำเร็จ:', predError);
        alert('ดึงข้อมูลการทายผลไม่สำเร็จ: ' + predError.message);
        return;
    }

    let updatedCount = 0;
    for (const p of predictions || []) {
        const oldPoints = p.points_awarded || 0;
        let newPoints = 0;

        const exactScore = Number(p.pred_a) === Number(match.actual_score_a) && Number(p.pred_b) === Number(match.actual_score_b);
        const correctWinner = p.predicted_winner && match.actual_winner && p.predicted_winner === match.actual_winner;

        if (exactScore) newPoints = 3000;
        else if (correctWinner) newPoints = 1000;

        const diff = newPoints - oldPoints;
        if (diff === 0) continue;

        const { data: user, error: userError } = await supabaseClient
            .from('users')
            .select('total_points')
            .eq('id', p.user_id)
            .single();

        if (userError || !user) {
            console.warn('หา User ไม่เจอ:', p.user_id, userError);
            continue;
        }

        const { error: updateUserError } = await supabaseClient
            .from('users')
            .update({ total_points: (user.total_points || 0) + diff })
            .eq('id', p.user_id);

        if (updateUserError) {
            console.error('อัปเดตแต้ม user ไม่สำเร็จ:', updateUserError);
            continue;
        }

        const { error: updatePredError } = await supabaseClient
            .from('predictions')
            .update({ points_awarded: newPoints, scored_at: new Date().toISOString() })
            .eq('id', p.id);

        if (updatePredError) console.error('อัปเดต prediction ไม่สำเร็จ:', updatePredError);
        else updatedCount++;
    }

    alert(`คำนวณแต้มสำเร็จ อัปเดต ${updatedCount} รายการ`);
}
