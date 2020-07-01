import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { AbstractControl, Validators } from '@angular/forms';

export class PassValidators{
    static isoldvalid(control:AbstractControl)
    {
        return new Promise((resolve)=>{
                setTimeout(()=>{
                    if(control.value!=="1234")
                    {
                        resolve ({isoldvalid:true});
                    }
                    else
                    resolve (null);
                },2000);
        });
    }

    static dontmatch(control:AbstractControl)
    {
        let newpass=control.get('newpass');
        let confirmpass=control.get('confirmpass');
        if(newpass.value !== confirmpass.value)
        {
            return {dontmatch:true};
        }
        return null;
    }
}