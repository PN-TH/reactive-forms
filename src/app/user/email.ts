import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: "Ecris juste ton mail..."
        }
    };

    return !valid ? errors : null;
}