import { IChart } from "@mrblenny/react-flow-chart";

export const chartSimple: IChart = {
  offset: {
    x: 0,
    y: 0,
  },
  scale: 1,
  nodes: {
    node1: {
      id: "node1",
      type: "Aave:Flash Loan",
      position: {
        x: 500,
        y: 100,
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          properties: {
            type: "reserve",
            amount: 0,
            asset: "ETH",
          },
        },
      },
      properties: {
        name: "Aave:Flash Loan",
        type: "initial",
        nodeType: "flashLoan",
      },
    },
    node2: {
      id: "node2",
      type: "Uniswap:Swap",
      position: {
        x: 505,
        y: 300,
      },
      ports: {
        port1: {
          id: "port1",
          type: "input",
          properties: {
            type: "input",
            amount: 0,
            asset: "ETH",
          },
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            type: "output",
            amount: 0,
            asset: "ETH",
          },
        },
      },
      properties: {
        name: "Uniswap:Swap",
        type: "initial",
        nodeType: "swap",
      },
    },
    node3: {
      id: "node3",
      type: "End",
      position: {
        x: 510,
        y: 500,
      },
      ports: {
        port1: {
          id: "port1",
          type: "input",
          properties: {
            type: "end",
            amount: 0,
            asset: "ETH",
          },
        },
      },
      properties: {
        name: "End",
        type: "initial",
        nodeType: "end",
      },
    },
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port1",
      },
      to: {
        nodeId: "node2",
        portId: "port1",
      },
      properties: {
        label: "Aave:Flash Loan to Uniswap:Swap",
      },
    },
    link2: {
      id: "link2",
      from: {
        nodeId: "node2",
        portId: "port2",
      },
      to: {
        nodeId: "node3",
        portId: "port1",
      },
      properties: {
        label: "Uniswap:Swap to End",
      },
    },
  },
  selected: {},
  hovered: {},
};
