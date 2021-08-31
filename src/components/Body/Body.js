import SearchBox from "../SearchBox/SearchBox";
import Item from "../Item/Item";

const Body = () => {
  const data = [
    {
      id: 1,
      title: "malorum corrumpit",
      content:
        "Lorem ipsum dolor sit amet, te eum error nullam, et his quem indoctum. Id eum esse omittam periculis, et vis populo efficiantur. Esse quaestio ad quo, ullum omittantur dissentiet an nec. Ea erant dissentiet vim, quo cu forensibus appellantur instructior. Sit et congue adipiscing, at odio inimicus qui, ad ius malorum corrumpit. No per semper reprimique.",
      who: "James Canvas",
      date: "2021-08-27",
      tags: ["interview", "job", "career"],
    },
    {
      id: 2,
      title: "forensibus appellantur",
      content:
        "Ea intellegat constituto dissentiet quo, ea possim hendrerit vim. Et minim everti reprehendunt has. Verear facilisi ex mei, ius eu graece corpora adversarium. Et graeci propriae antiopam ius. Cetero aperiam intellegebat sea in, eos cu tollit scriptorem. Fuisset detraxit comprehensam pri ei.",
      who: "Mike Smith",
      date: "2021-08-21",
      tags: ["tag4", "tag5", "tag6"],
    },
    {
      id: 3,
      title: "oportere incorrupte",
      content:
        "Ut amet reformidans concludaturque per, sit ex oportere incorrupte. Sea ea dico accusam expetendis, elit denique detraxit usu et, et has partem blandit gubergren. Partem dictas regione pri cu, qui dico veri recteque no, no nec mundi vocibus commune. Mediocrem partiendo id nec, vel at soluta voluptatibus.",
      who: "Colin Forum",
      date: "2021-02-07",
      tags: ["tag7", "tag8", "tag9"],
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
      tags={itemData.tags}
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
