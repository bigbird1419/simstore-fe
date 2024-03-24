import Button from "../Button";

export default function MenuItem({
    content,
    classname
}) {
    return (
        <div className={classname}>
            <Button to={content.path} className={'uppercase'}>{content.title}</Button>
        </div>
    )
}