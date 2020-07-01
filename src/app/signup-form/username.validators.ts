import { AbstractControl, ValidationErrors } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors
    {
        if((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace:true}
        return null;
    }
    static shoudlbeUnique(control:AbstractControl):Promise<ValidationErrors|null>
    {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{ 
                if(control.value=='mosh')
                   resolve ({shoudlbeUnique:true});
                else resolve(null);
               },2000);
        });
       
    }
}