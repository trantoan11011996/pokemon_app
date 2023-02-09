import React, { useContext } from "react";
import { PokemonContext } from "../../Context/Context";
import { Button, Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UserBag() {
  const { bag, setBag } = useContext(PokemonContext);

  const showPokemon = async (record) => {
    const filterArr = bag.filter((item) => {
      return item.id !== record.id;
    });
    await setBag(filterArr);
    toast.success("You success to release your pokemon");
  };
  const columns = [
    {
      title: "Avatar of Pokemon",
      dataIndex: ["sprites", "front_default"],
      key: "Avarta",
      width: 300,
      align: "center",
      render: (img) => {
        return (
          <div className="wrap-avatar">
            <img src={img}></img>
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 250,
      align: "center",
      render: (name) => {
        return <h1 className="name-pokemon">{name}</h1>;
      },
    },
    {
      title: "Action",
      key: "operation",
      width: 80,
      align: "center",
      render: (record) => {
        return (
          <Button onClick={() => showPokemon(record)}>
            Release your Pokemon
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <ToastContainer />
      <div className="user-bag">
        <h1 className="user-bag-header">List of Pokemon catches by You</h1>
        <Table
          className="table-antd"
          dataSource={bag}
          columns={columns}
          pagination={{ defaultCurrent: 1, pageSize: 3 }}
        ></Table>
      </div>
    </>
  );
}
