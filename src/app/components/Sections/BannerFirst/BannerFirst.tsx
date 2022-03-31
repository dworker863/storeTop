import {
  StyledBanners,
  StyledBannersFirst,
  StyledBannersSecond,
} from './StyledBannerFirst';

const BannerFirst = () => {
  return (
    <StyledBanners>
      <StyledBannersFirst />
      <StyledBannersSecond />
    </StyledBanners>
  );
};

export default BannerFirst;
