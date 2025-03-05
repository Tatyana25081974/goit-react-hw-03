import css from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        />
    </label>
  );
}