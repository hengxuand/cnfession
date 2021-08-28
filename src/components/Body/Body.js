import SearchBox from "../SearchBox/SearchBox";
import Item from "../Item/Item";

const Body = () => {
  const data = [
    {
      id: 1,
      title: "test1 title",
      content: "test1 content body.",
      who: "James",
      date: "2021-08-27",
    },
    {
      id: 2,
      title: "test2 title",
      content: "test2 content body.",
      who: "Mike",
      date: "2021-08-21",
    },
    {
      id: 3,
      title: "test3 title",
      content: "test3 content body.",
      who: "Colin",
      date: "2021-02-07",
    },
  ];
  const dataList = data.map((itemData, index) => (
    <Item
      key={index}
      id={itemData.id}
      title={itemData.title}
      content={itemData.content}
      who={itemData.who}
      date={itemData.date}
    ></Item>
  ));
  return (
    <div>
      <SearchBox />
      <div>{dataList}</div>
    </div>
  );
};

export default Body;
