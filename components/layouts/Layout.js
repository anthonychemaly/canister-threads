import Footer from "./Footer";
import Header from "./Header2";

const Layout = ({
  layoutSettings = { header: "", footer: "" },
  children,
  showFooter = true,
}) => {
  return (
    <>
      <div className="wrap">
        {showFooter && <Header headerSetting={layoutSettings.header} />}
        {children}
        {showFooter && <Footer footerSetting={layoutSettings.footer} />}
      </div>
    </>
  );
};

export default Layout;
