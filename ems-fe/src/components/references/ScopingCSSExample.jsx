import styles from "../../button.module.css";
export const ScopingCSSExample = () => {
    return (
        <div>
            {/* CSS Modules scope styles locally to this component */}
            <h1 className={styles.title}>My Button</h1>
            <button className={styles.button}>Click me</button>
            <p>
                Note: CSS Modules scope styles locally to this component, so class names
                like "button" and "title" won't conflict with styles in other files.
            </p>
        </div>
    );
}