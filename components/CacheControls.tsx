import { Button } from "@/components/ui/button";
import { DatabaseBackup, Database, DatabaseZap } from "lucide-react";

interface CacheControlsProps {
  isCacheEnabled: boolean;
  toggleCache: () => void;
  handleForceUpdate: () => void;
  cacheExpiryTime: Date | null;
}

const CacheControls: React.FC<CacheControlsProps> = ({
  isCacheEnabled,
  toggleCache,
  handleForceUpdate,
  cacheExpiryTime,
}) => {
  return (
    <div className="mt-4 grid animate-fade-up grid-cols-1 gap-4 px-4">
      <div className="text-center">
        {isCacheEnabled ? (
          <>
            <p className="text-xs text-muted-foreground">
              The scripts are cached in your browser to optimize performance.
              Use the button below to re-poll the server for changes.
            </p>
            {cacheExpiryTime && (
              <p className="text-xs text-muted-foreground">
                Cache will expire automatically at{" "}
                {cacheExpiryTime.toLocaleTimeString()}
              </p>
            )}
          </>
        ) : (
          <p className="text-xs text-muted-foreground">
            The cache is disabled. All data will be fetched from the server.
          </p>
        )}
      </div>
<div className="flex justify-center space-x-2 py-4">
  {isCacheEnabled ? (
    <>
      <Button variant="outline" onClick={handleForceUpdate}>
        <span className="flex items-center space-x-2">
          <DatabaseBackup className="w-4 h-4"/>
          <span>Reload via API</span>
        </span>
      </Button>
      <Button variant="outline" onClick={toggleCache}>
        <span className="flex items-center space-x-2">
          <Database className="w-4 h-4"/>
          <span>Disable Cache</span>
        </span>
      </Button>
    </>
  ) : (
    <Button variant="outline" onClick={toggleCache}>
      <span className="flex items-center space-x-2">
        <DatabaseZap className="w-4 h-4"/>
        <span>Enable Cache</span>
      </span>
    </Button>
  )}
</div>
    </div>
  );
};

export default CacheControls;