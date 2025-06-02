import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"

// Section IDs that match our navigation
const sectionIds = ['journal', 'game-tracking', 'analytics', 'equipment', 'expenses', 'resources'];

const Benefits: React.FC = () => {
    return (
        <div id="features">
            <h2 className="sr-only">Features</h2>
            {benefits.map((item, index) => {
                return <BenefitSection 
                    key={index} 
                    benefit={item} 
                    imageAtRight={index % 2 !== 0} 
                    id={sectionIds[index]}
                />
            })}
        </div>
    )
}

export default Benefits