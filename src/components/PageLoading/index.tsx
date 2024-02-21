import Icons from "../../../public/assets/icons";
import PageMeta from "../../PageMeta";
import CircularProgress from "../CircularProgress/CircularProgress";
import { Flex } from "../Flex/Flex";

interface Props {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const PageLoading = ({ isLoading, children }: Props) => (
  <>
    <PageMeta />
    {isLoading && (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-[10000] loading-wrapper h-full w-full flex flex-col items-center justify-center">
        <Flex
          direction="col"
          align="center"
          justify="center"
          className="bg-white rounded-xl p-12 z-[10000]"
        >
          <Icons.LogoGrande className=" h-[120px] w-[178px]" />
          <CircularProgress />
        </Flex>
      </div>
    )}
    {children}
  </>
);
export default PageLoading;
