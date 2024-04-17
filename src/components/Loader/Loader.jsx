import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({
  width = '14px',
  height = '14px',
  strokeColor = 'white',
}) => {
  return (
    <RotatingLines
      visible={true}
      height={width}
      width={height}
      strokeColor={strokeColor}
      strokeWidth="5"
      animationDuration="1"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};