let formById = document.getElementById('formId') as HTMLFormElement | null;

if (formById){
    console.log(formById.action.toString());
}
// let formById = document.getElementById('formId');
//
// if (formById instanceof HTMLFormElement){
//     console.log(formById.action.toString());
// }