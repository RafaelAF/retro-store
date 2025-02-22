import RunningBar from "@/components/store/_Elements/RunningBar";
import { MainSection } from "@/components/store/Product/MainSection";

export default function Page (){
    return (
        <div>
            <div className="flex mx-auto w-full max-w-5xl">
                <MainSection /> 
            </div>
            <RunningBar msgs={['Size Exchange Guarantee', 'Free Ship & Returns', '24/7 Customer Support']} />
        </div>
    )
}