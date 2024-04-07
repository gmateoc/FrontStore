import { SwalReact } from "../../utils/SwalConfig";

export const useSwalCustom = (
    icon = null,
    title = null,
    text = null,
    showConfirmButton = null,
    showCancelButton = null,
    confirmButtonText = '',
    cancelButtonText = '',
    timer = null,
    successFunction = null,
    successFunctionParams= null,
    cancelFunction = null
) => {
    SwalReact.fire({
        icon,
        title,
        text,
        showConfirmButton,
        showCancelButton,
        confirmButtonText,
        cancelButtonText,
        iconColor: '#E41B23',
        color: 'white',
        timer,
    }).then((response) => {
        if (response.isConfirmed && successFunction) successFunction(successFunctionParams);
        if (!response.isDismissed && cancelFunction) cancelFunction();
    })
}
