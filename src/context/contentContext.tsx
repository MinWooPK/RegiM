import { type } from "os";
import { createContext, ReactNode, useContext } from "react";
import { RingColorIcons } from "../components/FeatureIcon";
import { FeaturesIcons } from "../components/Icon";
import { Logo } from "../components/Logo";

const textContent = {
    product_name: "RegiM",
    cta_button: "Get Early Access",
}

const features: {
    title: string,
    description: string,
    iconType: FeaturesIcons,
    featureColor: RingColorIcons,
}[] = [
        { iconType: 'Event', featureColor: 'secondary', title: 'Event Metrics', description: 'Track your ticket sales, attendees count and more with much ease.', },
        { iconType: 'Registration', featureColor: 'primary', title: 'Registration & Ticketing', description: 'Manage your Event registrations and ticket sales easier and receive payments instantly.', },
        { iconType: 'Branded', featureColor: 'secondary', title: 'Branded Badges', description: 'Create your custom branded badges for your events and get them printed.', },
        { iconType: 'Organaiser', featureColor: 'primary', title: 'Oragniser App', description: 'Manage your events at the palm of your hand with our Oragniser App.', },
        { iconType: 'Attendee', featureColor: 'secondary', title: 'Attendee Engagement', description: 'Engage with your attendees via email, surveys and much more.', },
        { iconType: 'Calendar', featureColor: 'primary', title: 'Add to Calendar', description: 'Effortless way to add your events to registered users calendars by 1-click.', },
    ];

const integrations: {
    type: Logo,
}[] = [
        { type: 'Rainbow' },
        { type: 'GP' },
        { type: 'Monkey' },
        { type: 'Iluminati' },
        { type: 'Sun' },
        { type: 'Group' },
        { type: 'Frame' },

    ]


const defaultContextValue = {
    text: textContent,
    features,
    integrations,
}


const ContentContext = createContext(defaultContextValue);

export default function ContentProvider({ children }: { children: ReactNode }) {
    return (
        <ContentContext.Provider value={defaultContextValue}>
            {children}
        </ContentContext.Provider>
    )
}

export const useContent = () => {
    const content = useContext(ContentContext);
    return content;
}