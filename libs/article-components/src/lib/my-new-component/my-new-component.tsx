import './my-new-component.module.scss';

/* eslint-disable-next-line */
export interface MyNewComponentProps {}

export function MyNewComponent(props: MyNewComponentProps) {
  return (
    <div>
      <h1>Welcome to MyNewComponent!</h1>
    </div>
  );
}

export default MyNewComponent;
