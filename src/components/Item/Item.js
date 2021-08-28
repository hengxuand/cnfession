import "./Item.scss";

const Item = (props) => {
  return (
    <table className="row col-6 mx-auto item">
      <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.content}</td>
        <table>
          <td>{props.who}</td>
          <td>{props.date}</td>
        </table>
      </tr>
    </table>
  );
};

export default Item;
