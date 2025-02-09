import { InputField } from "../../_Elements/TextField";
import { Button } from "../../_Micro/Button";

export function FormNews (){
    return (
        <form className="flex flex-col gap-3">
            <InputField type="text" placeholder="Whats your email address?" />
            <div className="max-w-[170px]"><Button href="/" text="Subscribe" /></div>
        </form>
    )
}