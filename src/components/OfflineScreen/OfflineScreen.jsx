import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

export default function OfflineScreen({ children }) {
  const isOnline = useOnlineStatus();
  //   if (isOnline) {
  //     return children;
  //   }

  //   return <>
  //     <div className="bg-gray-300">
  //         <h1>Offline page</h1>
  //     </div>
  //   </>;

  if (!isOnline) {
    return (
      <>
        {children}
        <div className="fixed right-8 bottom-8 bg-gray-200 text-gray-500 px-3 py-2 rounded-md">
          <p>
            <FontAwesomeIcon icon={faWifi} className="me-2" />
            Check your internet connection
          </p>
        </div>
      </>
    );
  }
  return children;
}
