import { ChevronRightIcon, PlayIcon } from "@heroicons/react/20/solid";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReamAPI() {
  const codeString = `import axios from 'axios';
    
const reamAPI = process.env.API_URL;
const apiKey = process.env.API_KEY;
const storeUID = process.env.STORE_UID
const tileUID = process.env.TILE_UID

//Example receipt data received from POS
const receiptData = {
    store: 'Bunnings Toowoomba North',
    uid: storeUID,
    date: '01/14/2024, 2:11:33 PM',
    orderNo: 7894561232,
    useBLE: true,
    completed: true,
    receiptId: '7515489',
    dynamicOrder: false,
    deviceID: tileUID,
    tax: 64.2,
    total: 642.00,
    order: [
        {
          name: 'Item 1',
          price: 2.00,
          quantity: 3
        },
        {
          name: 'Item 2',
          price: 6.78,
          quantity: 1
        },
        {
          name: 'Item 3',
          price: 2.28,
          quantity: 2
        }
      ],
    transactionDetails: {
        AID: 'A0000000000041010',
        account: 'CREDIT',
        approved: true,
        cardNo: '7701',
        cardType: 'Mastercard'
      }
    };
    
const createReceipt = async () => {
      try {
        const response = await axios.post(apiUrl, receiptData, {
          headers: {
            'Authorization': \`Bearer \${apiKey}\`,
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error posting receipt:', error);
      }
    };
    
createReceipt();`;

  const responseString = `{
    "receiptID": "GFvuDNeWmzaw8CGO5VJ1",
    "deviceID": "REAM-TILE-E8:9F:6D:2F:99:04",
    "originURL": "https://ream-1.web.app/receipt/GFvuDNeWmzaw8CGO5VJ1",
    "useBLE": true,
    "url": "https://bit.ly/3A9MowZ",
    "acknowledged": true
}`;
  return (
    <div className="mt-16">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight text-gray-50">
          Ream API
        </h2>
        <p className="mt-6">
          The Ream backend API is the start point of any digital receipt. Once
          an in-store order has been placed, the POS system will send a POST
          request to the Public API endpoint with the details of the receipt and
          their API Key. If the store is using Tiles in their WiFi
          configuration, the server formats then stores the receipt data
          securely within the customers database entry. It then stores the
          <br />
          <br />
          If the store is using Ream Tiles in the BLE configuration, the server
          then responds with a receipt URL and additional metadata - the POS
          system would then
        </p>
        <p className="mt-6">
          The Ream backend API is written in Typescript using the Node.js
          Express framework. It's hosted on multiple AWS Lambda instances for
          simplicity and scalability using <code>aws-serverless-express</code>.
          It includes external endpoints that handle actions such as receipt
          generation, device (Ream Tile) registration, API Key requests etc. as
          well as dozens of internal endpoints.
        </p>
      </div>
      <div className="relative isolate overflow-hidden bg-gradient-to-b rounded-xl mt-8 from-indigo-100/30">
        <div className="mx-auto max-w-7xl pb-4 pl-2 pt-2 xl:pl-10 xl:pt-10">
          <div className="overflow-hidden">
            <div
              className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[100%] skew-x-[-15deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
              aria-hidden="true"
            />
            <div className="relative   sm:pt-0 md:pl-0 md:pr-0">
              <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none relative">
                <div className="rounded-l-xl overflow-hidden bg-gray-900">
                  <div
                    id="Example Node.js code"
                    className="flex bg-gray-900/40 ring-1 ring-white/5"
                  >
                    <div className="-mb-px flex  w-full text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        Example.js
                      </div>
                      <div className="border-r border-b border-gray-100/10 px-4 py-2">
                        App.js
                      </div>
                      <div className="h-full w-full pr-1 flex items-center justify-end ">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Run
                          <PlayIcon
                            aria-hidden="true"
                            className="-mr-0.5 h-4 w-4"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="-pt-2 border-t">
                    <SyntaxHighlighter
                      showLineNumbers={true}
                      language="javascript"
                      style={atomDark}
                      customStyle={{ fontSize: "12px" }} // Custom inline style
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-black sm:h-32" />
      </div>
      <p className="mt-6">
        The code above is obviously just a basic example. However, the response
        from the server should look something like this:{" "}
      </p>
      <div className="-pt-2 rounded-xl overflow-hidden">
        <SyntaxHighlighter
          language="json"
          style={atomDark}
          customStyle={{ fontSize: "12px", borderRadius: 15 }} // Custom inline style
        >
          {responseString}
        </SyntaxHighlighter>
      </div>
      <p className="mt-0">
        Annoyingly I've been unable to get the Dynamic NFC chip within the Tile
        to reliably transfer more than 33 bytes of data via NFC. I know that
        both the IC and the NFC transfer protocol are capable of transferring
        much more than this, so it's really just a failing of my own embedded
        systems knowledge. Therefore I've had to use a URL shortener to reliably
        get the receipt URL across to the user. This isn't ideal as it's just
        one more hoop to jump through on both the server and client sides, and I
        hope to rectify it one day but since the whole system (mostly) works
        as-is currently, I haven't been spending any time on it.
      </p>
      <p className="mt-6">
        You can view the resulting receipt{" "}
        <a
          href="https://ream-1.web.app/receipt/GFvuDNeWmzaw8CGO5VJ1"
          target="_blank"
          className="text-blue-500"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
