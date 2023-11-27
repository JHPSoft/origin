/**
 * Custom Alert [toastr]
 *
 * (Type)
 * 0 (false): dnager
 * 1 (true):  success
 * 2: info
 * 3: warning
 * 4: default
 *
 * @param {any} type    toastr type
 * @param {any} title   toastr Title
 * @param {any} message toastr Message
 * @param {any} option  toastr Option
 */
const cAlert = (type, title = "", message = "", option = {}) => {
    let toastrOption = {timeOut: 4000, closeButton: true, progressBar: false, positionClass: 'toast-top-center'};
    Object.assign(toastrOption, option);
    if (type === 2)
        toastr.info(message, title, toastrOption);
    else if (type === 3)
        toastr.warning(message, title, toastrOption);
    else if (type === 4)
        toastr.success(message, title, Object.assign(toastrOption, {iconClass: "toast-default"}));
    else if (type)
        toastr.success(message, title, toastrOption);
    else
        toastr.error(message, title, toastrOption);
}