import project_list from "./projectList.js";

$(document).ready(function() {


    project_list.map((data) => {

        let projectStart = "<div class='project-item-padding col-md-4 mb-4'><div class='project-item'><a href='" +
                            data.link +"'> <p>" +
                            "<span class='project-name'>" + data.projectName + "</span>" +
                            "<span class='date'>" + data.date + "</span>" +
                            "<br>" +
                            "<span class='language'>" + data.language + "</span>" +
                            "<br>" + "<br>" +
                            data.summary +
                            "<br> <br>" +
                            "IDE: " + data.IDE + "";

        (data.framework) ? projectStart += ("<br> Framework: " + data.framework) : null;
        (data.libraries) ? projectStart += ("<br> Libraries: " + data.libraries) : null;
        (data.APIs) ? projectStart += ("<br> API(s): " + data.APIs) : null;

        projectStart += "</p>";

        projectStart += "<img class='project-image' src='" + data.image + "'";

        projectStart += "</a></div></div>";

        $(".project-wrapper").append(projectStart);
    })
})