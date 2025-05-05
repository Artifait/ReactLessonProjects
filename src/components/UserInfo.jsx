
export default function UserInfo({name = "НЕИЗВЕСТНО", groupNumber = 0, oplata = false}) {
  let text = `СТАТУС КУРСА: ${oplata ? "ОПЛАЧЕНО" : "НЕДОСТУПЕН!"}`;
  return (
    <div>
      Имя студента: {name}; Номер группы: {groupNumber}; {text} 
    </div>
  );
}
