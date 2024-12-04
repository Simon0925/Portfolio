export default async function handleDownload() {
    try {
        const response = await fetch('http://localhost:8080/api/resume/CV.docx');

        if (!response.ok) {
            console.error('File download failed:', response.status, response.statusText);
            return;
        }

        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'CV.docx';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error fetching file:', error);
    }
}
