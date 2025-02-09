type Props = {
    type: 'text' | 'number';
    placeholder: string
}

export const InputField = (props: Props) => {
    return (
        <input className="w-full py-[10px] px-4 border border-d-black" type={props.type} placeholder={props.placeholder} />
    )
}