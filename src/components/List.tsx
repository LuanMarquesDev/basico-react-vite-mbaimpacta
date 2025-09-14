export default function List() {
  const items: number[] = [1, 2, 3, 4, 5];
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>Item {item}</li>
      ))}
    </ul>
  );
}
