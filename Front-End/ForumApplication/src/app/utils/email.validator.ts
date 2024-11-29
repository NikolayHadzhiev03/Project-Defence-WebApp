import {ValidatorFn } from "@angular/forms";

    export function emailValidator(domains : string[]) : ValidatorFn{
        const domainStr = domains.join('|');
        const regEx = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainStr})`)
        return (control) => {
           const isInvalid = control.value === '' || regEx.test(control.value);
            return isInvalid ? null : {emailValidator : true}
        }

    }