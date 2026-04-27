// for (i in Stagiaire.modules){
//     var NoteGeneral 
//     NoteGeneral = ((Stagiaire.modules[i].cc1 + Stagiaire.modules[i].cc2 + Stagiaire.modules[i].cc3)+Stagiaire.modules[i].EFM*3)/6
//     Stagiaire.modules[i].note_general  =  NoteGeneral
// }
// let note_moyenne = 0
// for( i=0;i< Stagiaire.modules.length;i++){
//     note_moyenne = note_moyenne + Stagiaire.modules[i].note_general
//     Stagiaire.Note_Moyenne = note_moyenne/Stagiaire.modules.length
    
// }<div class="form-group">
            <div>
                <label>اسم المادة:</label>
                <input type="text" id="subjectName" placeholder="مثال: الرياضيات">
            </div>
            <div>
                <label>معرف المادة (ID):</label>
                <input type="text" id="subjectID" placeholder="ID المادة">
            </div>
        </div>
        
        <div class="form-group" style="grid-template-columns: 1fr 1fr 1fr 1fr;">
            <div>
                <label>الفرض 1:</label>
                <input type="number" id="quiz1" max="20" min="0">
            </div>
            <div>
                <label>الفرض 2:</label>
                <input type="number" id="quiz2" max="20" min="0">
            </div>
            <div>
                <label>الفرض 3:</label>
                <input type="number" id="quiz3" max="20" min="0">
            </div>
            <div>
                <label>الامتحان:</label>
                <input type="number" id="finalExam" max="20" min="0">
            </div>
        </div>