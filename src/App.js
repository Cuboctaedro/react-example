import './App.css';
import { useState } from 'react';
import { Panel } from './Panel';
import { Container } from './Container';
import { Tabs } from './Tabs';

const tabs = [
  { id: 'pictures', label: 'Pictures', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio id auctor volutpat. Maecenas augue diam, feugiat vitae ligula ac, dapibus pharetra nisi. Vivamus faucibus eros a mi sollicitudin malesuada. Nullam metus mauris, suscipit a sagittis nec, cursus eu elit. Aenean nulla leo, sagittis nec eleifend at, tincidunt ultrices risus. In laoreet ligula vel laoreet interdum. Ut sodales, arcu eu rutrum convallis, mauris erat porta ex, vitae elementum nunc augue non ex. Integer porttitor molestie nulla eget ullamcorper.' },
  { id: 'music', label: 'Music', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio id auctor volutpat. Maecenas augue diam, feugiat vitae ligula ac, dapibus pharetra nisi. Vivamus faucibus eros a mi sollicitudin malesuada. Nullam metus mauris, suscipit a sagittis nec, cursus eu elit. Aenean nulla leo, sagittis nec eleifend at, tincidunt ultrices risus. In laoreet ligula vel laoreet interdum. Ut sodales, arcu eu rutrum convallis, mauris erat porta ex, vitae elementum nunc augue non ex. Integer porttitor molestie nulla eget ullamcorper.' },
  { id: 'videos', label: 'Videos', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio id auctor volutpat. Maecenas augue diam, feugiat vitae ligula ac, dapibus pharetra nisi. Vivamus faucibus eros a mi sollicitudin malesuada. Nullam metus mauris, suscipit a sagittis nec, cursus eu elit. Aenean nulla leo, sagittis nec eleifend at, tincidunt ultrices risus. In laoreet ligula vel laoreet interdum. Ut sodales, arcu eu rutrum convallis, mauris erat porta ex, vitae elementum nunc augue non ex. Integer porttitor molestie nulla eget ullamcorper.
  Morbi mollis quam ac lorem luctus tristique vel nec leo. Donec vestibulum tortor sed nisi dignissim fringilla. Nullam iaculis justo vitae dolor bibendum, at pellentesque felis posuere. Donec porta enim sit amet mi semper venenatis. Suspendisse potenti. Aenean sollicitudin nunc arcu, eget interdum tortor imperdiet eget. Cras ut mauris ante. Suspendisse feugiat a mi nec mollis. Donec ex nisl, aliquam nec rutrum vitae, egestas vel eros. Donec volutpat at lectus sed euismod.
  Nam pellentesque tellus eu euismod convallis. Aenean ac augue sodales nisl feugiat laoreet. Sed vitae lacus fermentum, volutpat risus id, tincidunt massa. Integer turpis arcu, pellentesque in laoreet vitae, consectetur eu ex. Ut sollicitudin velit et justo mollis, ut placerat lacus suscipit. Phasellus a odio rhoncus, faucibus libero eu, laoreet magna. Nulla pulvinar sed arcu ullamcorper interdum. Morbi eu rutrum tellus, ac rutrum felis. Pellentesque accumsan justo at dolor convallis mattis. Maecenas elementum urna sed purus blandit ultricies. Duis sit amet lacinia enim, vitae euismod lectus.` },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <>
      <div class="fixed-top-menu pt-2 pb-2">
        <Container>
          <Tabs tabs={tabs} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        </Container>
      </div>

      <div class="section">
        <Container>
          {tabs.map((tab) => {
            if (tab.id === selectedTab) {
              return (
                <Panel title={tab.label} id={tab.id} >
                  {tab.content}
                </Panel>
              );
            } else {
              return null;
            }
          })}
        </Container>
      </div>
    </>
  );
}

export default App;
