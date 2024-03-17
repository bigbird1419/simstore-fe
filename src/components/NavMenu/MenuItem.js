import Button from "../Button";

export default function MenuItem({
    content,
    classname
}) {
    return (
        <div className={classname}>
            <Button to={content.path}>{content.title}</Button>
        </div>
    )
}