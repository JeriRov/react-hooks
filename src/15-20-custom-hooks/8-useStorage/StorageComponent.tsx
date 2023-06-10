import { useSessionStorage, useLocalStorage } from './useStorage';

export const StorageComponent = () => {
  const [name, setName, handleRemoveName] = useSessionStorage('name', 'Kyle');
  const [age, setAge, handleRemoveAge] = useLocalStorage('age', 26);

  const handleSetName = () => setName('John');
  const handleSetAge = () => setAge(40);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={handleSetName}>Set Name</button>
      <button onClick={handleSetAge}>Set Age</button>
      <button onClick={handleRemoveName}>Remove Name</button>
      <button onClick={handleRemoveAge}>Remove Age</button>
    </div>
  );
};
