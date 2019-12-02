import { AbstractControl, ValidationErrors } from '@angular/forms';

export function refValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const refRegex = RegExp('^[0-9]#[A-Z0-9]+$');
    const valid = refRegex.test(control.value);

    const errors = {
        ref: {
            rules: ''
        }
    };

    return !valid ? errors : null;
}