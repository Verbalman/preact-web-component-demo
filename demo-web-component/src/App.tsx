import { h } from 'preact';
import { Demo } from './Demo';

export function App({ displayName, startCount, onChangeCount }: any) {
  return (
    <div>
      <Demo
        name={displayName}
        startCount={startCount}
        onChangeCount={onChangeCount}
      />
    </div>
  );
}
