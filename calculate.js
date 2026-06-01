async function calculateAndSaveScores(matchId) {
console.log("โหลดไฟล์คำนวณสำเร็จ!");    
console.log("เริ่มคำนวณแต้มให้คู่ที่:", matchId);
    
    // 1. ดึงผลจริง
    const { data: match } = await supabaseClient
        .from('matches')
        .select('actual_score_a, actual_score_b')
        .eq('id', parseInt(matchId))
        .single();

    if (!match) {
        console.error("ไม่พบข้อมูลผลการแข่งขันจริงของคู่ที่:", matchId);
        return;
    }

    // 2. ดึงข้อมูลการทายผลทั้งหมด
    const { data: predictions, error: predError } = await supabaseClient
        .from('predictions')
        .select('*')
        .eq('match_id', parseInt(matchId));

    if (predError) {
        console.error("ดึงข้อมูลการทายผลไม่สำเร็จ:", predError);
        return;
    }
    
    console.log("พบรายการทายผล:", predictions);

    // 3. ลูปคำนวณและอัปเดต (ถ้าไฟล์เดิมไม่มีลูปนี้ ก็วางทับลงไปได้เลยครับ)
    for (let p of predictions) {
        let points = 0;
        
        // เปรียบเทียบผล
        if (parseInt(p.pred_a) === match.actual_score_a && parseInt(p.pred_b) === match.actual_score_b) {
            points = 3000;
        } else if ((p.pred_a > p.pred_b && match.actual_score_a > match.actual_score_b) || 
                   (p.pred_a < p.pred_b && match.actual_score_a < match.actual_score_b) || 
                   (p.pred_a === p.pred_b && match.actual_score_a === match.actual_score_b)) {
            points = 1000;
        }

        if (points > 0) {
            const { data: user, error: userError } = await supabaseClient
                .from('users')
                .select('total_points')
                .eq('id', p.user_id)
                .single();

            if (userError || !user) {
                console.warn("หา User ID:", p.user_id, "ในตาราง users ไม่เจอ!");
                continue;
            }

            const { error: updateError } = await supabaseClient
                .from('users')
                .update({ total_points: (user.total_points || 0) + points })
                .eq('id', p.user_id);
                
            if (updateError) {
                console.error("อัปเดตแต้มไม่สำเร็จสำหรับ ID:", p.user_id, updateError);
            } else {
                console.log("บวกแต้มสำเร็จให้ ID:", p.user_id, "จำนวน:", points);
            }
        }
    }
}