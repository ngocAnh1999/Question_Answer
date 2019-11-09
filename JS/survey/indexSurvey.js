function deleteSurvey(me) {
        debugger
        let survey_name = document.getElementById("survey-name");
        survey_name.innerHTML = me.parentNode.parentNode.children["survey-name"].textContent;
}