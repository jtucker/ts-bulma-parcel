import 'bulma/css/bulma.css';

interface IAwesomeProject
{
    name: string;
    subtitle: string;
}

// Bootstrap function.
const bootstrapApp = (elementId: string, projectInfo: IAwesomeProject): boolean  => {
    const rootApp = document.getElementById(elementId) as HTMLDivElement;
    const currYear = new Date();
    rootApp.innerHTML = `&copy; ${currYear.getFullYear()} This is my ${projectInfo.name}: ${projectInfo.subtitle}`;
    return true;
};

// Bootstrap the `app`.
bootstrapApp("app", {name: "Awesome Project", subtitle: "Super Awesome."})