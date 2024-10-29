import LeftImageLayout from './LeftImageLayout';
import RightImageLayout from './RightImageLayout';
import OverlayLayout from './OverlayLayout';
import FullWidthLayout from './FullWidthLayout';

const DynamicLayout = ({ data,consult=false }) => {
  switch (data.layout) {
    case 'leftImage':
      return <LeftImageLayout data={data} consult={consult}/>;
    case 'rightImage':
      return <RightImageLayout data={data} consult={consult} />;
    case 'overlay':
      return <OverlayLayout data={data} consult={consult} />;
    case 'fullWidth':
      return <FullWidthLayout data={data} consult={consult} />;
    default:
      return null;
  }
};

export default DynamicLayout;
