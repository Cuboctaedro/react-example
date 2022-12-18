import { Tab } from './Tab';

export const Tabs = ({ tabs, setSelectedTab, selectedTab }) => {
    return (
        <div class="tabs is-boxed">
            <ul>
                {tabs.map((tab) => {
                    return (
                        <Tab id={tab.id} label={tab.label} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                    );
                })}
            </ul>
        </div>
    );
}