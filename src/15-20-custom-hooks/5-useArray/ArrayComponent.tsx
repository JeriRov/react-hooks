import { useArray } from './useArray';

export const ArrayComponent = () => {
  const {
    array,
    set: handleSet,
    push: handlePush,
    remove: handleRemove,
    filter: handleFilter,
    update: handleUpdate,
    clear: handleClear,
  } = useArray<number>([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      <div>{array.join(', ')}</div>
      <button onClick={() => handlePush(7)}>Add 7</button>
      <button onClick={() => handleUpdate(1, 9)}>
        Change Second Element To 9
      </button>
      <button onClick={() => handleRemove(1)}>Remove Second Element</button>
      <button onClick={() => handleFilter((n: number) => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => handleSet([1, 2])}>Set To 1, 2</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
