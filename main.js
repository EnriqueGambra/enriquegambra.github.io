function downloadResume() {

    const anchorElement = document.createElement('a');

    anchorElement.download = 'Enrique Gambra Resume';

    anchorElement.href = '/assets/Gambra_Enrique_Resume.docx';

    anchorElement.click();
}

function emailMe() {
    window.location.href = "mailto:gambra7@gmail.com";
}