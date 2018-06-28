-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2018 at 09:19 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlbh3`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CatID` int(11) UNSIGNED NOT NULL,
  `CatName` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CatID`, `CatName`) VALUES
(4, 'COGNAC'),
(3, 'WHISKY'),
(2, 'CHAMPAGNES'),
(1, 'VANG'),
(5, 'VODKA');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `ID` int(11) UNSIGNED NOT NULL,
  `OrderID` int(11) NOT NULL,
  `ProID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` bigint(20) NOT NULL,
  `Amount` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`ID`, `OrderID`, `ProID`, `Quantity`, `Price`, `Amount`) VALUES
(1, 1, 2, 1, 200, 200);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderID` int(11) UNSIGNED NOT NULL,
  `OrderDate` datetime NOT NULL,
  `UserID` int(11) NOT NULL,
  `Total` bigint(20) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT '0',
  `Adress` varchar(400) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderID`, `OrderDate`, `UserID`, `Total`, `Status`, `Adress`) VALUES
(1, '2018-06-29 00:00:00', 16, 200, 0, 'Trường đại học Khoa Học Tự Nhiên. 227, Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh');

-- --------------------------------------------------------

--
-- Table structure for table `producers`
--

CREATE TABLE `producers` (
  `ProducerName` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ProducerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `producers`
--

INSERT INTO `producers` (`ProducerName`, `ProducerID`) VALUES
('Savá – Pháp', 1),
('Bordeaux Pháp', 2),
('Feudi Salentini S.R.L', 3),
('Pháp', 4),
('BALLANTINE’S – Scotland', 5),
('CH – Pháp', 6),
('Nga', 7);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProID` int(11) UNSIGNED NOT NULL,
  `ProName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TinyDes` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `FullDes` text COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(11) NOT NULL,
  `CatID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `View` int(11) NOT NULL DEFAULT '0',
  `Sell` int(11) DEFAULT '0',
  `ProducerID` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProID`, `ProName`, `TinyDes`, `FullDes`, `Price`, `CatID`, `Quantity`, `View`, `Sell`, `ProducerID`) VALUES
(1, 'Château Suau Sauternes 2014 Grand Cru Classé', 'Dòng vang trắng hảo hạng của vùng Sauternes, Bordeaux được sản xuất từ hai giống nho Sauvignon Blanc và Sémillon nhiễm nấm Botrytis.', 'Château Suau (Sauternes) là dòng rượu vang đạt chuẩn cấp độ 2 của chuẩn Grand Cru Classé. Đây là cấp độ rượu vang cao cấp, trên cấp độ AOC của Pháp.\r\n\r\nVào năm 1855 Hoàng đế Napoleon III đã yêu cầu một cấp độ cao cấp hơn đi kèm đó là chất lượng rượu vang cao cấp hơn. Khi đó cấp rượu vang Grand Cru Classé  đã ra đời. Cấp độ này dành cho những nhà sản xuất liên tục trong 7 năm đạt được cấp độ Grand Cru. Nếu chỉ một năm không đạt thì lập tức trở lại danh hiệu Grand Cru đầu tiên. Riêng Grand Cru Classé đã được chia làm 5 cấp độ chất lượng, chai rượu vang Châteua Suau 2014 Sauternes đạt cấp 2 của cấp độ Grand Cru Classé', 100, 1, 90, 2, 0, 1),
(2, 'Chateau Pichon Longueville Comtesse de Lalande 2011', 'Chateau Pichon Lalande  kết hợp với món ăn cổ điển từ thịt, thịt bê, thịt lợn, thịt bò, thịt cừu, vịt, gà, các món nướng và om.Cũng sẽ rất tốt khi dùng với các món ăn châu Á, hải sản, nấm và mì ống.', 'Rượu vang Château Pichon Longueville Comtesse de Lalande niên vụ 2011 là một chai rượu được phối trộn từ rất nhiều giống nho bao gồm 78% Cabernet Sauvignon, 12% Cabernet Franc, 2% Petit Verdot và 8% Merlot. Chai rượu vang cao cấp này được ủ 60% trong thùng gỗ sồi mới của pháp. Lâu đài Pichon Lalande vùng Medoc Pauillac Bordeaux Pháp đó chính là nơi sản sinh ra chai rượu vang đạt 13% độ cồn này. Rượu mềm mại, quyến rũ như một viên hồng ngọc, chỉ một ngụm nhỏ cũng khiến trái tim bạn xao xuyến.', 200, 1, 90, 3, 1, 2),
(3, 'Chateau Haut Batailley Pauillac Bordeaux 2013', 'Haut-Batailley 2013 được sản xuất phần lớn từ giống nho Cabernet Sauvignon tạo nên màu đỏ ruby mãnh liệt cùng hương thơm ngọt ngào của những loại trái cây chín đỏ.', 'Haut-Batailley 2013 được sản xuất phần lớn từ giống nho Cabernet Sauvignon tạo nên màu đỏ ruby mãnh liệt cùng hương thơm ngọt ngào của những loại trái cây chín đỏ, minh chứng cho sự trưởng thành đầy đủ và hài hòa của những giống nho được pha trộn. Ấn tượng ban đầu khi rượu tràn vào khoang miệng là sự kéo dài của vị chát tannin mượt  mà và thanh lịch. Haut-Batailley 2013 có kết cấu cân bằng, sự tươi mới, với phong cách quyến rũ vô cùng thanh lịch.\r\nNho được hái bằng tay từ những cây nho 35 tuổi trong nhiều vườn nho trải rộng 22 ha, được trồng với mật độ 10.000 cây/ha trên nền đất sỏi thô. Nho khi chín được lựa chọn liên tục trong quá trình thu hoạch.Những trái nho đạt chất lượng được ủ khoảng 03 tuần trong thùng thép không gỉ, sau đó được ủ trong thùng gỗ sồi Pháp (60% thùng mới) từ 16 đến 18 tháng. Haut-Batailley 2013 được sản xuất một phần lớn từ giống nho Cabernet sauvignon (70%) kết hợp với  Merlot (25%) và Cabernet Franc (5%) tạo nên màu đỏ ruby mãnh liệt.', 150, 1, 92, 3, 0, 2),
(4, 'Le Petit Mouton de Mouton Rothschild 2012', 'Le Petit Mouton de Mouton Rothschild 2012 Phong phú, màu sâu sắc, cấu trúc tốt.', 'RƯợu vang Le Petit Mouton được sản xuất từ 49% những trái nho thơm ngon của vườn nho nhà Château Mouton Rothschild. Những trái nho này được hái vào hai tuần giữa tháng mười năm 2012.\r\nChâteau Mouton Rothschild nằm ở xã Pauillac thuộc Medoc, cách 30 dặm (50km) về phía tây bắc của thành phố Bordeaux. Là một trong năm nhà sản xuất lớn cho ra những loại rượu được đánh giá cao nhất và có giá trên thế giới. Rượu vang được Château Mouton Rothschild sản xuất thường có được hương vị bốc lửa và mạnh mẽ nhất của Bordeaux. Lâu đài rượu vang này đã nổi tiếng được bổ sung vào bảng phân loại những rượu vang dẫn đầu 1855 và năm 1973.', 300, 1, 93, 0, 0, 2),
(5, 'Le Petit Mouton de Mouton Rothschild 2012', 'Château Latour Grand Vin 2007 thú vị, đầy sang trọng và tươi mát.', 'Château Latour Grand Vin 2007 có sự bùng nổ của trái cây quyến rũ tinh khiết và ngon miệng cùng một lúc. Tannin của nó được mềm mại và tinh tế trong sự cân bằng hoàn hảo.', 250, 1, 90, 0, 0, 2),
(6, 'Château Mouton Rothschild Pauillac 2001', 'Mầu ruby-tím, với mùi hương cà phê, nho đen, cam thảo', 'Rượu vang Château Mouton Rothschild Pauillac 2001 có màu đỏ sẫm, màu đỏ thắm, và có mùi trái nho đen chín hòa quện với không khí pha chút mùi cà phê rang, mùi của các gia vị sắc thái phương Đông. Mùi vị của rượu này là sự pha trộn giữa mùi vị của với những hương vị tao nhã tinh tế – caramel, vani, mocha, blackberry, trái cây berry tự nhiên – tạo nên là sự quyến rũ say mê. ', 100, 1, 90, 0, 0, 2),
(7, 'Château Mouton Rothschild Pauillac 2007', 'Thơm giàu trái cây màu đỏ, trái cây màu đen, blackberry, cam thảo.', 'Năm 1992 loại rượu này được xếp hạng 4 trên Top 10 Rượu vang.\r\nMàu sắc đậm nét với màu tím, rượu vang cho thấy một mùi hương phong phú bao gồm trái cây màu đỏ và đen, trái cây hoang dã và cam thảo. Mùi hương của hoa oải hương và hoa mẫu đơn được theo sau đó là khoáng chất và những mùi khói. Có vẻ như mùi vị trên vòm miệng, trên các tannin mạnh mẽ nhưng kem, Chateau Mouton Rothschild 2007 thể hiện sự cân bằng giữa vị ngọt của trái nho chín màu mận đen và hương vị berry. \r\nVị: Rất nhiều thịt, với tannin mạnh mẽ nhưng mượt, rượu vang cho thấy một sự cân bằng phi thường.', 400, 1, 100, 0, 0, 2),
(8, 'Opéra Blanc De Blancs Demi Sec', 'Opéra Blanc De Blancs Demi Sec một sản phẩm mới, ánh sáng lấp lánh rượu vang, trong đó cho thấy một hương vị trái cây đẹp và hương vị thanh lịch,  nó là một món khai vị tuyệt vời.', 'Rượu được sản xuất tại nhà máy của các CFGV Pháp công ty (Compagnie Francaise des Grands Vins) – nhà sản xuất lớn nhất của các loại rượu vang lấp lánh ở châu Âu. Năm 2009, tổ chức kỷ niệm lần thứ 100 của mình. Người sáng lập của công ty – Eugene Charmat (Edzhin Charm), người vào năm 1909 đã phát minh ra akratofor – lên men thùng rượu vang lấp lánh. Trong cùng năm đó ông thành lập sản xuất đầu tiên trên thế giới của rượu vang lấp lánh trong bể trong vùng lân cận của Paris tại thành phố Tournai-en-Brie (Tournan-en-Brie). Kết quả là một sản phẩm mới – chất lượng và rượu vang lấp lánh giá rẻ, mà nhanh chóng chiếm được thủ đô nước Pháp và lây lan khắp thế giới. Đối với một trăm năm, công ty đã trở thành một ngành công nghiệp rượu vang Edzhina Sharma khổng lồ. CFGV bây giờ sản xuất hàng năm hơn 80 triệu chai, trong đó 14 triệu được xuất khẩu.', 200, 1, 95, 0, 0, 2),
(9, 'Camasella Sangiovese PrimitivoI GT Puglia', 'Rượu vang đỏ Camasella Sangiovese Primitivo GT Puglia có màu đỏ sậm, được làm từ vườn nho vùng Puglia Italia.', 'Puglia hay còn được gọi là Apulia là một dải đất dài và mỏng manh nằm tại “gót” của “chiếc ủng” Italy. Phía bắc của vùng này có nhiều đồi núi và văn hóa sãn xuất rượu vang cũng có nhiều kĩ thuật tương đồng với vùng trung Ý. Phía Nam Puglia lại hầu như bằng phẳng và có mối liên hệ mạnh mẽ với văn hóa La Mã – Hi Lạp truyền thống. Đây cũng là nơi cho ra đời chai rượu tuyệt vời mang tên Camasella Sangiovese Primitivo 2015.\r\nRượu Sangiovese Primitivo được làm từ giống nho huyền thoại của dòng vang đỏ. Đó là nho Primitivo. Hầu như mọi rượu vang đỏ ngon đều được làm từ giống nho này. Những chai rượu được làm từ giống nho này thường có nồng độ tương đối cao. Nhưng chai rượu vang ý này lại là ngoại lệ. Nó có nồng độ là 13% rất vừa phải, dễ thưởng thức.', 500, 1, 95, 0, 0, 3),
(10, '125 Primitivo Del Salento 2015', '125 Primitivo Del Salento 2015 có màu đỏ ruby với hương vị mạnh mẽ, hơi cay của lá thuốc lá, mận chín, anh đào, sự mượt mà của vani và ca cao. đặc biệt rượu giàu tannins.', 'Rượu vang 125 Primitivo là một trong những chai rượu thơm ngon nhất đến từ hãng rượu đình đám Feudi Salentini Taranto Puglia Italia. Nó được làm nên bởi những quả nho primitivo ngon nhất được chọn lọc kĩ lưỡng vườn nho cổ thụ hàng trăm tuổi. Tuy chỉ mới ra đời không lâu nhưng nó đã được các chuyên gia về rượu và các bạn rượu trên thế giới thừa nhận.\r\nChai rượu vang primitivo 125 có nồng độ khá cao. Đó là 14,0%. Nhưng điều đó không đồng nghĩa với vị rượu nhạt nhòa. Chai rượu này là một chai rượu nhẹ nhàng, mềm mại nhưng hương vị rất quyến luyến. Nó phù hợp với hầu hết mọi lứa tuổi. Dù là người cao tuổi hay phụ nữ đến những người không biết uống rượu vang.', 600, 0, 90, 0, 0, 3),
(11, 'Rượu Champagne Moscato capetta – Vang nổ', 'Moscato capetta được ủ và lên men kĩ lưỡng hơn rất nhiều các loại rượu khác. Nó ohair trải qua hai quá trình lên men. Lên men trong thùng và lên men trong chai', 'Được sản xuất ở vùng Capetta đất nước ý. Những năm gần đây dòng vang trắng Moscato đã bùng nổ trên thị trường rượu. Trong đó chai vang Ý này có thể nói là dẫn đầu về số lượng bán ra. Nó được bán trên khắp nước ý và rộng rãi trên nhiều nước lớn khác. Và bây giờ đã nhập khẩu sang Việt nam.\r\nMoscato capetta được ủ và lên men kĩ lưỡng hơn rất nhiều các loại rượu khác. Nó ohair trải qua hai quá trình lên men. Lên men trong thùng và lên men trong chai. Qua quy trình nhiều cẩn thận sau đó mới đem ra thị trường.\r\n\r\nChai vang ý này có màu vàng ánh kim, sáng như ánh nắng ban mai. Nhãn chai và nút chai đề có màu vàng kim. Chai rượu mang phong cách nhẹ nhàng, ấm ấp, đẹp mắt. Nồng độ của chai rượu này nhẹ hoen rất nhiều các chai rượu khác là 6,5%. Với nồng độ này thì rất vừa vặn, dễ uống.', 500, 2, 0, 0, 0, 4),
(12, 'Rượu Champagne Pháp Deutz Brut Vintage', 'Rượu Sâm panh Deutz Brut Vintage nổi tiếng của Pháp được làm từ Pinot Noir – Chardonnay và Pinot Meunier.', 'Rượu Sâm panh Deutz Brut Vintage nổi tiếng của Pháp được làm từ Pinot Noir – Chardonnay và Pinot Meunier. Các giống nho bản địa này ngày cuàng được lai tạo thành nhiều giống con và có hương vị đặc trưng nhất định. Mỗi giống nh lại đem đếnc ho rượu vang hoặc rượu sâm panh của nó một vị đặc trưng. Riêng các giống nho cho rượu sâm banh này chính là sự gợi ý đầy sức sống, tươi mới, mãnh liệt và hoàn hảo.\r\nRượu Sâm panh Deutz Brut Vintage nổi tiếng của Pháp được làm từ Pinot Noir – Chardonnay và Pinot Meunier. Các giống nho bản địa này ngày cuàng được lai tạo thành nhiều giống con và có hương vị đặc trưng nhất định. Mỗi giống nh lại đem đếnc ho rượu vang hoặc rượu sâm panh của nó một vị đặc trưng. Riêng các giống nho cho rượu sâm banh này chính là sự gợi ý đầy sức sống, tươi mới, mãnh liệt và hoàn hảo.', 600, 2, 95, 0, 0, 4),
(13, 'Rượu Chamgne Pháp Deutz Brut Classic', 'Rượu Champagne Deutz Blanc de Blancs Vintage là một champagne mới. Nó mới được nhập khẩu về Việt Nam nhưng không lâu sau đó nó đã nhận được sự chào đón và trở nên phổ biến.', 'Rượu Champagne Deutz Blanc de Blancs Vintage là một champagne mới. Nó mới được nhập khẩu về Việt Nam nhưng không lâu sau đó nó đã nhận được sự chào đón và trở nên phổ biến. Có nhiều ý kiến đánh giá về rượu sâm panhnày trên các trang web review về rượu vang nói chung và rượu sâm panh nói riêng. Tuy nhiên, đa phần chúng tỏ ra mạnh mẽ và đẹp. Một chai rượu ấn tượng với bọt sủi tăm tinh tế và nhiều màu sắc hương vị hòa quyện.\r\nRượu Champagne Deutz Blanc de Blancs Vintage là một champagne mới. Nó mới được nhập khẩu về Việt Nam nhưng không lâu sau đó nó đã nhận được sự chào đón và trở nên phổ biến. Có nhiều ý kiến đánh giá về rượu sâm panhnày trên các trang web review về rượu vang nói chung và rượu sâm panh nói riêng. Tuy nhiên, đa phần chúng tỏ ra mạnh mẽ và đẹp. Một chai rượu ấn tượng với bọt sủi tăm tinh tế và nhiều màu sắc hương vị hòa quyện.', 400, 2, 98, 1, 0, 4),
(14, 'Rượu Champagne Deutz Cuvee William Deutz 2006', 'Rượu champagne Cuvee William Deutz là một đứa con tinh thần lớn nữa của hãng rượu Deutz. Thành lập vào năm 1883.', 'Rượu champagne Cuvee William Deutz là một đứa con tinh thần lớn nữa của hãng rượu Deutz. Thành lập vào năm 1883 bởi hai nhà sáng lập đồng thời và tổng giám đốc William Deutz và Pierre-Hubert Geldermann. Rượu sâm panh Deutz đã sớm trở thành một thương hiệu phi quốc gia và sự tín nhiệm.\r\nRượu champagne Cuvee William Deutz là một đứa con tinh thần lớn nữa của hãng rượu Deutz. Thành lập vào năm 1883 bởi hai nhà sáng lập đồng thời và tổng giám đốc William Deutz và Pierre-Hubert Geldermann. Rượu sâm panh Deutz đã sớm trở thành một thương hiệu phi quốc gia và sự tín nhiệm.', 300, 2, 97, 0, 0, 4),
(15, 'Vang nổ Pháp Sparkling Pol Remy Brut', 'Rượu vang sủi Pol Remy Brut là một chai rượu sâm panh với nhiều dung tích khác nhau. Với các dung tích : 0.2L, 0.75ml và 1.5L phục vụ cho các mục đích sử dụng rượu vang khác nhau.', 'Rượu vang sủi Pol Remy Brut là một chai rượu sâm panh với nhiều dung tích khác nhau. Với các dung tích : 0.2L, 0.75ml và 1.5L phục vụ cho các mục đích sử dụng rượu vang khác nhau. Đây là một chai rượu sâm panh hay nói cách khác nó còn được xem là một rượu khai vị. Dùng để uống với các món ăn như thịt trắng, nó cũng rất thích hợp với một món salad nhẹ nhàng lúc khai vị.\r\nRượu vang sủi Pol Remy Brut là một chai rượu sâm panh với nhiều dung tích khác nhau. Với các dung tích : 0.2L, 0.75ml và 1.5L phục vụ cho các mục đích sử dụng rượu vang khác nhau. Đây là một chai rượu sâm panh hay nói cách khác nó còn được xem là một rượu khai vị. Dùng để uống với các món ăn như thịt trắng, nó cũng rất thích hợp với một món salad nhẹ nhàng lúc khai vị.', 450, 2, 90, 0, 0, 4),
(16, 'Rượu Sparkling Pháp Pol Remy Ice NV', 'Rượu Sparkling Pol Remy Ice là một chai rượu sâm panh rất đặc biệt của Pháp. Bạn sẽ để ý đến chai rượu ngay ngày từ cái nhìn đầu tiên.', 'Rượu Sparkling Pol Remy Ice là một chai rượu sâm panh rất đặc biệt của Pháp. Bạn sẽ để ý đến chai rượu ngay ngày từ cái nhìn đầu tin khi bạn bước vào bất cứ một ship rượu vang hay nhà hàng nào. Bởi vì toàn bộ chai rượu được bao phủ bằng một màu trắng tinh khiết và nổi bật. Chai rượu đặc biệt này được làm từ giống nho Pháp đặc biệt Aïren-Ugni Blanc-Colombard. Nó nhận được nhiều đánh giá ưu tú và cũng có khá nhiều giải thưởng trong và ngoài nước.\r\nRượu Sparkling Pol Remy Ice là một chai rượu sâm panh rất đặc biệt của Pháp. Bạn sẽ để ý đến chai rượu ngay ngày từ cái nhìn đầu tin khi bạn bước vào bất cứ một ship rượu vang hay nhà hàng nào. Bởi vì toàn bộ chai rượu được bao phủ bằng một màu trắng tinh khiết và nổi bật. Chai rượu đặc biệt này được làm từ giống nho Pháp đặc biệt Aïren-Ugni Blanc-Colombard. Nó nhận được nhiều đánh giá ưu tú và cũng có khá nhiều giải thưởng trong và ngoài nước.', 600, 2, 95, 0, 0, 4),
(17, 'Rượu Sparkling Pháp Pol Remy Demi Sec', 'Rượu vang nổ Pháp Pol Remy Demi Sec là một chai rượu sâm panh mang trong mình sự kết hộ tinh tế giữa truyền thống và hiên đại.', 'Rượu vang nổ Pháp Pol Remy Demi Sec là một chai rượu sâm panh mang trong mình sự kết hộ tinh tế giữa truyền thống và hiên đại. Chai rượu được đóng gói với quy cách một chai thủy tinh xanh 750ml trong một hộp giấy sang trọng lịch sự. Độ cồn 11% được cho là một độ cồn khá nhẹ nhàng, một chai rượu uống để thư giãn tinh thần và đưa đẩy món ăn rất tố.\r\nRượu vang nổ Pháp Pol Remy Demi Sec là một chai rượu sâm panh mang trong mình sự kết hộ tinh tế giữa truyền thống và hiên đại. Chai rượu được đóng gói với quy cách một chai thủy tinh xanh 750ml trong một hộp giấy sang trọng lịch sự. Độ cồn 11% được cho là một độ cồn khá nhẹ nhàng, một chai rượu uống để thư giãn tinh thần và đưa đẩy món ăn rất tốt.\r\n\r\n', 500, 2, 98, 0, 0, 4),
(18, 'Rượu vang nổ Cremant de loire comte de la boisserie', 'Rượu vang nổ Pháp Drouet Freres Saumur Brut Comte de la Boisserie cũng mang một phong cách quý tộc và kiêu sa như cái tên của nó.', 'Rượu vang nổ Pháp Drouet Freres Saumur Brut Comte de la Boisserie cũng mang một phong cách quý tộc và kiêu sa như cái tên của nó. Rượu vang bá tước. Chai rượu có dung tích 750ml trong một chai thủy tinh xanh, thuộc dòng AOC. Nó là sự kết hợp hoàn hảo của hai giống nho Chenin Blanc và Chardonnay.\r\nRượu vang nổ Pháp Drouet Freres Saumur Brut Comte de la Boisserie cũng mang một phong cách quý tộc và kiêu sa như cái tên của nó. Rượu vang bá tước. Chai rượu có dung tích 750ml trong một chai thủy tinh xanh, thuộc dòng AOC. Nó là sự kết hợp hoàn hảo của hai giống nho Chenin Blanc và Chardonnay.', 650, 2, 97, 0, 0, 4),
(19, 'Pol Remy demi-sec', 'Rượu nổ Pháp Deutz Brut Vintage chính là một chai rượu tuyệt vời cho một buổi tiệc liên hoan cuối năm với nhiều món ăn ngon và nhiều đạm. Nó sẽ phần nào giúp các món ăn của bạn trở nên thơm ngon và dễ', 'Rượu nổ Pháp Deutz Brut Vintage chính là một chai rượu tuyệt vời cho một buổi tiệc liên hoan cuối năm với nhiều món ăn ngon và nhiều đạm. Nó sẽ phần nào giúp các món ăn của bạn trở nên thơm ngon và dễ nuốt hơn. Đặc biệt với những món ăn có quá nhiều đạm trong những dịp tiệc tùng liên miên. Rượu Sâm panh Pháp này chính là sự khởi nguồn của nhiều cảm hứng.\r\n\r\nMột chai rượu champagne với nhiều chủng khác nhau bao gồm một chai Deutz Brut Vintage Magnum dung tích 1.5L.', 300, 2, 98, 0, 0, 4),
(20, 'Champane lửa FOGOSO', 'Với hương vị và chất lượng của của từng chai rượu. Truyền thống làm rượu vang của Deutz đã được truyền thụ và thừa kế qua 5 thế hệ. ', 'Với hương vị và chất lượng của của từng chai rượu. Truyền thống làm rượu vang của Deutz đã được truyền thụ và thừa kế qua 5 thế hệ. Sở hữu vườn nho lớn nhất của vùng, là một trong những vườn nho lớn nhất của Pháp, Deutz cho ra đời những chai rượu champagne với giống nho được tuyển chọn kỹ càng và vô cùng thơm ngon.\r\n\r\nRượu champagne Cuvee William Deutz được sản xuất vào năm 2006, tính đến nay đã được hơn 11 năm. Chai rượu này được làm từ hai giống nho Pinot Noir và Chardonnay. Đây là hai giống nho thơm nổi tiếng của Pháp. Chúng đã được nhận giống và xuất khẩu đi nhiều quốc gia làm rượu vang khác trên thế giới. Nhìn chung, hai giống nho này cung cấp cho rượu vang của chúng ta một cấu trục rượu khá rõ ràng, đạt khoảng 7/10 điểm. Một hương vị nhẹ nhàng, tươi với những cũng vô cùng truyền thống.', 400, 2, 90, 0, 0, 4),
(21, 'BALLANTINE’S 12 YEARS', 'Ballantine là một sản phẩm rượu whisky của một triều đại nổi tiếng bởi sự pha trộn tinh tế . ', 'Xuất xứ:Scotland\r\nNguyên liệu:Ngũ cốc\r\nThể tích:  750 ml\r\nNồng độ : 43%\r\nHương vị :  Mùi dễ chịu, êm ái của mật ong, gỗ sồi và vanilla va hương trái cây hòa quyện tuyệt hảo.\r\nMàu sắc : Màu vàng tươi mật ong\r\nBallantine là một sản phẩm rượu whisky của một triều đại nổi tiếng bởi sự pha trộn tinh tế . Mỗi hạt  mạch nha được lựa chọn kỹ càng  cho sự pha trộn và tham gia đóng góp vào quá trình phát triển phức tạp này. Sự thanh lịch cộng với cân bằng trong pha trộn Scotch Whisky tạo nên  hương vị mật ong, hoa hòa quyện với  vị ngọt sồi kem..', 400, 3, 98, 0, 0, 5),
(22, 'BALLANTINE’S 17 YEARS', 'Ballentine’s Finest Là loại rượu phức hợp trong pha chế Scotch whisky tạo nên hương vị tao nhã tao nhã, đáp ứng phong cách hiện đại thời nay của người dùng.', '-Nồng độ : 43%\r\n-Màu Rượu : Vàng hổ phách.\r\n-Hương vị : Hương sâu , cân bằng , tinh tế của gỗ sồi , khói nhẹ và vani.\r\n-Nếm thử : Hương vị tròn đầy , đa chiều , rực rỡ với vị ngọt của mật ong cùng hương vị kem vani xen cùng hương gỗ sồi và khói than bùn đốt. Hương kem mượt mà hài hòa với vị ngọt dịu của gỗ sồi ,\r\n-Dư vị : Kéo dài với hương khói nhẹ , vani , và kết thúc với hương vị mặn mà của muối.\r\n\r\nBallantine’s 17 years old thể hiện tất cả những hương vị thuần túy Scotland , là sự kết hợp tỉ mỉ của các loại whisky mạch nha và ngũ cốc tuyệt vời từ mọi vùng . Với màu vàng hổ phách , hương vị ngọt tinh khiết của gỗ sồi , đã tạo nên sự độc đáo riêng và đưa Ballantine’s 17 Years trở thành một trong những whisky cổ điển được đánh giá cao trên thế giới.', 400, 3, 90, 0, 0, 5),
(23, 'Ballantine’s 21 years', 'Ballentine’s Finest Là loại rượu phức hợp trong pha chế Scotch whisky tạo nên hương vị tao nhã tao nhã, đáp ứng phong cách hiện đại thời nay của người dùng.', '– Loại rượu Whisky\r\n-Nồng độ : 40%\r\n-Màu Rượu : Vàng nhẹ.\r\n– Thể tích: 750ml\r\n-Hương vị : Nhẹ nhàng, thanh lịch với hương hoa, cây thạch nam, mật ong, thoảng hương gia vị.\r\n-Nếm thử : Cân bằng, phảng phất vị sôcôla sữa, táo đỏ và vani, dư vị sâu lắng phức cảm mang đến cảm giác tươi mát.\r\n', 1000, 3, 98, 0, 0, 5),
(24, 'Ballentine’s Finest 750ml', ' Màu vàng ánh sáng và sự pha trộn và hương vị không thể nhầm lẫn đến từ một hỗn hợp phức tạp và lựa chọn cẩn thận các loại whisky.', '* Xuất xứ: Scotland\r\n* Dung tích: 750ml\r\n* Độ cồn: 43°\r\nĐặc điểm\r\n* Màu: vàng nhẹ.\r\n* Mùi: nhẹ nhàng, thanh lịch với hương hoa, cây thạch nam, mật ong, thoảng hương gia vị.\r\n* Vị: cân bằng, phảng phất vị sôcôla sữa, táo đỏ và vani, dư vị sâu lắng phức cảm mang đến cảm giác tươi mát.Cách thưởng thức\r\nDùng nguyên chất hoặc thêm ít đá.', 1200, 3, 98, 0, 0, 5),
(25, 'Ballentine’s Finest 1000ml', ' Màu vàng ánh sáng và sự pha trộn và hương vị không thể nhầm lẫn đến từ một hỗn hợp phức tạp và lựa chọn cẩn thận các loại whisky.', '* Xuất xứ: Scotland\r\n* Dung tích: 1000ml\r\n* Độ cồn: 43°Đặc điểm\r\n* Màu: vàng nhẹ.\r\n* Mùi: nhẹ nhàng, thanh lịch với hương hoa, cây thạch nam, mật ong, thoảng hương gia vị.\r\n* Vị: cân bằng, phảng phất vị sôcôla sữa, táo đỏ và vani, dư vị sâu lắng phức cảm mang đến cảm giác tươi mát.\r\nCách thưởng thức\r\nDùng nguyên chất hoặc thêm ít đá.', 1000, 3, 91, 0, 0, 5),
(26, 'Ballantine’s 30 years hộp gỗ', 'Nằm trong số những dòng whisky tinh tế & đắt tiền nhất thế giới, tối thượng trong phân khúc Scotch whisky siêu sang trọng. ', ' Xuất xứ: Scotland\r\n* Dung tích: 750ml\r\n* Độ cồn: 40°\r\nĐặc điểm\r\n* Màu: vàng nhẹ.\r\n* Mùi: nhẹ nhàng, thanh lịch với hương hoa, cây thạch nam, mật ong, thoảng hương gia vị.\r\n* Vị: cân bằng, phảng phất vị sôcôla sữa, táo đỏ và vani, dư vị sâu lắng phức cảm mang đến cảm giác tươi mát.\r\n\r\nCách thưởng thức\r\nDùng nguyên chất hoặc thêm ít đá.', 1000, 3, 97, 0, 0, 5),
(27, 'Ballantine’s 30 years', 'Nằm trong số những dòng whisky tinh tế & đắt tiền nhất thế giới, tối thượng trong phân khúc Scotch whisky siêu sang trọng. Nguyên liệu chế biến được thu hoạch bằng tay. ', 'Màu vàng đậm cổ xưa của Ballatine’s 30 kết hợp với hương thơm nhẹ nhàng mùi trái cây cộng với vị tròn đều, mạnh mẽ của mật ong, hoa cỏ & trái cây tạo nên một Ballantine’s 30 hiếm có và không tìm thấy ở đâu khác.\r\n* Xuất xứ: Scotland\r\n* Dung tích: 750ml\r\n* Độ cồn: 40°\r\nĐặc điểm\r\n* Màu: vàng nhẹ.\r\n* Mùi: nhẹ nhàng, thanh lịch với hương hoa, cây thạch nam, mật ong, thoảng hương gia vị.\r\n* Vị: cân bằng, phảng phất vị sôcôla sữa, táo đỏ và vani, dư vị sâu lắng phức cảm mang đến cảm giác tươi mát.\r\n\r\nCách thưởng thức\r\nDùng nguyên chất hoặc thêm ít đá.', 1000, 3, 90, 0, 0, 5),
(28, 'Ballantine’s Limited Merry Christmas', 'Loại rượu whisky đặc trưng dành cho lễ Giáng sinh của Ballantine’s . Mang mùi hương trái cây như quế, nho khô, kẹo táo và lê, Ballantine’s Limited Merry Christmas', '* Xuất xứ: Scotland\r\n* Dung tích: 750ml\r\n* Độ cồn: 40°Đặc điểm\r\n* Màu: vàng nhẹ.\r\n* Mùi: mùi hương trái cây như quế, nho khô, kẹo táo và lê.\r\n* Vị: cân bằng, Ngọt ngào lưu trong miệng lâu.\r\nCách thưởng thức\r\nDùng nguyên chất hoặc thêm ít đá.', 1100, 3, 98, 0, 0, 5),
(29, 'Chivas 18 Năm', 'Rượu Chivas 18 là sự lựa chọn và pha trộn một cách tỷ mỷ các loại Rượu Whisky của Chuyên gia pha chế rượu lừng danh Colin Scott.', '– Rượu Chivas 18 là sự lựa chọn và pha trộn một cách tỷ mỷ các loại Rượu Whisky của Chuyên gia pha chế rượu lừng danh Colin Scott . Nó là sản phẩm chứa nhiều lớp Whisky Lúa mạch và Whisky Mạch nha khác nhau , được chưng cất từ nhiều vùng khắp đất nước Scotland . Một sản phẩm sang trọng đang chờ được khám phá\r\n\r\n– Trong các loại Rượu Chivas Regal , Chivas 18 năm mang đến cho bạn những trải nghiệm về rượu Whisky vô cùng đáng giá bởi vì đây là một loại Whisky với nguyên liệu ban đầu là hạt ngũ cốc và mạch nha tốt nhất được lựa chọn kỹ càng bằng tay sau đó chúng được chưng cất để tạo ra nhưng loại rượu Whisky nguyên liệu ban đầu và được ủ riêng biệt trong những thùng gỗ Sồi trong một thời gian nhất định . Cuối cùng các loại rượu Whisky này được hòa trộn với nhau để tạo nên Rượu Chivas 18 năm\r\n\r\n– Rượu Chivas 18 là Dòng sản phẩm tầm trung nhưng rất được đầu tư nên có Chất lượng cao , Mẫu mã sản phẩm đẹp . Chivas 18 năm với dáng chai tròn cổ điển thuôn từ dưới lên trên . Nó có màu da cam rực rỡ , hương Chocola , Cam , Chanh , Gia vị và một ít vị Khói mang đến một hương thơm ngát thật khác biệt\r\n\r\n– Chivas 18 năm thường được sử dụng để làm đồ uống trong những Bữa tiệc sang trọng hoặc làm quà biếu cho Người thân , Bạn bè và Đối tác làm ăn\r\n\r\nCÁCH THƯỞNG THỨC RƯỢU CHIVAS 18 :\r\n\r\n– Dùng nguyên chất\r\n\r\n– Thêm một ít nước giúp lan tỏa hương vị\r\n\r\n– Thêm một ít đá để cảm nhận hương vị mãnh liệt\r\n\r\n– Thêm đá kết hợp với soda và 1 lát chanh cho một cảm giác sảng khoái', 1500, 3, 98, 0, 0, 5),
(30, 'Chivas 21 Năm', 'Royal Salute 21 Years Old ( Rượu Chivas 21 năm ) được Pecnod Ricard là chủ sở hữu của thương hiệu Chivas Brothers nhập khẩu trực tiếp vào Việt nam .', ' Điểm đặc biệt của Chivas 21 năm _ Hàng nhập khẩu là chai rượu có thiết kế Nút bi , có Số Seri riêng của mỗi chai và nhãn chính trên thân chai có thêm dòng chữ Singapore Duty Not Paid\r\n\r\nRượu Chivas 21 năm là sự lựa chọn và pha trộn một cách tỷ mỷ và sành điệu các loại rượu Whisky hảo hạng của chuyên gia pha chế rượu lừng danh Colin Scott . Nó là sản phẩm chứa nhiều lớp Whisky Lúa mạch và Whisky Mạch nha khác nhau được chưng cất từ nhiều vùng khắp đất nước Scotland . Một sản phẩm sang trọng đang chờ được khám phá\r\n\r\nRượu Chivas 21 năm có màu vàng hổ phách lộng lẫy và mùi thơm cân bằng của trái cây hương hoa và khói , một sự kết hợp đầy lý thú của những hương vị ngọt ngào , sâu lắng , êm dịu và thơm ngon dư vị ấm áp kéo dài\r\n\r\nChivas 21 năm được thiết kế là chai sứ sản xuất thủ công tinh sảo như một cống phẩm dâng lên Hoàng gia Anh để chúc mừng lễ đăng quan của Nữ hoàng Elizabenth đệ nhị . Chivas 21 năm là dòng rượu chuẩn mực nhất đạt tiêu chuẩn vàng của hiệp hội Blended Scotch Wisky trong nhiều năm kể từ 1953 đến nay\r\n\r\nRượu Chivas 21 ( Royal Salute 21 Years Old ) thường được sử dụng làm đồ uống trong những Bữa tiệc sang trọng , làm quà biếu cho Người thân , Bạn bè và Đối tác làm ăn.\r\nCÁCH THƯỞNG THỨC RƯỢU CHIVAS 21 NĂM :\r\n\r\n– Dùng nguyên chất\r\n\r\n– Ướp lạnh trước khi uống\r\n\r\n– Thêm một ít đá giúp cảm nhận hương vị khác biệt\r\n\r\n– Thêm một ít nước để cảm nhận hương vị mãnh liệt', 1000, 3, 98, 0, 0, 5),
(31, 'Hennessy PARADIS', 'Chỉ có đất đai, khí hậu của vùng Cognac mới tạo ra được những trái nho đặc sắc để làm ra rượu brandy thượng hạng. ', 'Chỉ có đất đai, khí hậu của vùng Cognac mới tạo ra được những trái nho đặc sắc để làm ra rượu brandy thượng hạng. Vùng này được chia ra làm 6 khu vực, với những thành phần địa chất và khí hậu khác nhau nên trái nho ở mỗi khu vực cũng mang tính chất khác nhau\r\n\r\nHennessy Paradis được pha chế từ 100 loại rượu cốt từ những khu vực trồng nho tốt nhất tại cognac , thông qua quá trình lựa chọn khắt khe những loại eau-de-vie hảo hạng nhất .\r\n\r\nHennessy Paradis mở ra khuynh hướng cho cách tận hưởng lạc thú tao nhã và lịch lãm .\r\n\r\nNếu có một sản phẩm tiêu biểu cho người sành điệu về cognac, sự lựa chọn đó sẽ là Hennessy Paradis .', 800, 4, 90, 0, 0, 6),
(32, 'Otard XO cognac', 'Chỉ có đất đai, khí hậu của vùng Cognac mới tạo ra được những trái nho đặc sắc để làm ra rượu brandy thượng hạng. ', 'Là nhân cách của mình trong sự cân bằng hoàn hảo của sự pha trộn của nó của vintages tốt nhất. Mũi cho thấy mùi hương hài hòa tròn phong phú của bụi rậm trong các ghi chú vào buổi sáng và da đầu. Cognac XO vàng OTARD BARON kết hợp tinh tế của hương vị trái cây (mận, hazelnut) sự mềm mại của một liên lạc của mật ong, tăng cường bởi một chút tím. Lão hóa tốt nhất eaux-de-vie trong hầm rượu của Château cho nó màu hổ phách của mình với gợi ý của châu sa, một dấu hiệu của cognac về sự khác biệt lớn lao.\r\nĐặc điểm riêng\r\nFine Champagne, một liên minh của mùi hương mạnh mẽ và sự khéo léo và chiều dài.\r\nMũi: hương liệu hoa tăng cường bởi hương vị của chanh, lê và thuốc lá trong miệng: liên lạc của vani, dấu vết gia vị.', 1000, 4, 98, 0, 0, 6),
(33, 'Otard vsop cognac', 'Otard cognac là thương hiệu làm cho dòng cognac tuyệt vời hơn.\r\n\r\nOtard rơm chai hình lấy cảm hứng từ bản thân Cognac.', 'Otard cognac là thương hiệu làm cho dòng cognac tuyệt vời hơn.\r\n\r\nOtard rơm chai hình lấy cảm hứng từ bản thân Cognac. Khi xoay cognac trong thủy tinh, do đó, thở ra hương vị tốt nhất, nó để lại một bộ phim nhẹ trên các bức tường trong đó đứng một vài giọt. Họ nói rằng Cognac có những giọt nước mắt. Họ là những gì lấy cảm hứng từ hình dạng của chai “thả” được tạo ra bởi Otard trong năm 1968.\r\nHình thức này là rất ý nghĩa, kể từ sau đó, chủ đề chung của tất cả các sáng tạo Otard. Kiên quyết tỉnh táo, một hộp chứa một giọt nước mắt! Sạch đường nét, màu sắc kết hợp đồng và thép, một bản sắc thực sự đóng vai trò như người giám hộ và Stooges của bản thân chai.\r\n\r\nHậu duệ của một dòng, Baron Otard Jean-Baptiste Antoine, thủ môn của một công thức cho hương vị Cognac chưa từng sinh ra của sự pha trộn hài hòa tốt nhất của mình eaux-de-vie, thành lập năm 1795 Otard Cognac và tăng Château de Cognac, nơi sinh François 1. Một kỹ sư đào tạo, ông đã mua lâu đài cho điều kiện lão hóa độc đáo của mình. Trong hơn hai thế kỷ, các công thức vẫn còn giữ bí mật tiếp tục lây lan.\r\n\r\nLâu đài của Cognac là một nơi duy nhất với điều kiện tự nhiên độc đáo và\r\nlão hóa: độ ẩm đặc biệt, nhiệt độ không đổi, độ dày của bức tường và chaix duy nhất rất nhiều. Được xây dựng giữa 13 và thế kỷ XVI, tường dày ba mét, độ ẩm\r\nlên đến 90%, nhiệt độ liên tục 15 ° C cho phép cognacs Otard phức tạp, hương thơm, hương vị và phát triển tròn, tính linh hoạt và đặc biệt hài hòa hương vị đặc trưng.', 1000, 4, 90, 0, 0, 6),
(34, 'Courvoisier XO', 'Courvoisier XO được tạo ra với sự pha trộn độc đáo của Cognac lâu năm là kết quả trong một sản phẩm vô cùng phong phú.', 'Chỉ có đất đai, khí hậu của vùng Cognac mới tạo ra được những trái nho đặc sắc để làm ra rượu brandy thượng hạng. Vùng này được chia ra làm 6 khu vực, với những thành phần địa chất và khí hậu khác nhau nên trái nho ở mỗi khu vực cũng mang tính chất khác nhau:\r\n– Grande Champagne\r\n– Petite Champagne\r\n– Borderies\r\n– Fins Bois\r\n– Bois Ordinaires\r\nChính những thành phần như đá vôi, đất sét, đất cát, khoáng chất và kim loại ở mỗi khu vực này, cộng thêm với gió biểm đặm mùi muốn mặn từ Đại Tây Dương thổi vào khiến cho trái nho trồng ở mỗi khu vực đều có đặc tính riêng.\r\nCognac được làm từ rượu vang và phải gồm ít nhất là 90% nho Ugni Blanc, rồi Folle Blanche và Colombard. Những thứ nho này mà dùng để làm ra rượu vang thì rất xoàng, uống chua cả miệng vì có nhiều acidity. Nồng độ alcohol của nó lại chỉ đạt tới mức từ 9% đến 10% nên vị nhạt.Thế nhưng khi đem chưng cất lên để làm ra Cognac thì nó lại trở thành thứ rượu mạnh đặc sắc nhất thế giới.', 1200, 4, 91, 0, 0, 6),
(35, 'Martell XO cognac', 'Martell là loại rượu lâu đời nhất trong dòng Cognac, thành công và nổi tiếng nhờ hương vị đặc biết, mịn màng mà hấp dẫn.', 'Martell XO là một nhà sản xuất hàng đầu của Cognac, được thành lập bởi Jean Martell vào năm 1715. Nó đã được bán vào năm 1988 gia đình Firino Martell Seagram và một lần nữa trong năm 2002 Tập đoàn Pernod Ricard, cũng sở hữu các thương hiệu Cognac Biscuit và Renault.\r\nCác chủ hầm, đến những năm 1980, từ Chapeau gia đình (trong cách các chủ hầm rượu của Hennessy là từ Fillioux gia đình).\r\nMartell coi trọng sản xuất rượu cognac tinh khiết, mềm mại, trung lập, do đó nó không chưng cất cặn trong rượu vang. Thường có thùng làm từ gỗ sồi Trontais, đó là tối hơn, với lỗ chân lông thu hẹp, tannin và lignin, hơn Limousin, gỗ sồi, kết quả trong ít hơn “gỗ” hương liệu trong Cognac.\r\n\r\nMartell Cognac được sản xuất từ ​​rượu vang từ vùng Borderies, trái ngược với các công ty khác, trong đó chủ yếu là bán Cognac Champagne mịn. Borderies Cognac có một hương vị hấp dẫn này.\r\n\r\nGiới thiệu về giống:\r\nMartell XO Medaillon (Very Superior Old Pale) là một khách chào đón tại bất cứ thu thập từ một bữa tiệc lớn để 1 thân mật ‘Tete-a-Tete’. Trơn tru và êm dịu, sự viên mãn của nó nắm giữ lên nước đá hoặc pha trộn. Các nhãn mang một huy chương vàng khắc với các bức chân dung của Louis XIV, trong năm cuối cùng của triều đại (1715) Martell được thành lập', 1100, 4, 90, 0, 0, 6),
(36, 'Martell vsop', 'Martell là loại rượu lâu đời nhất trong dòng Cognac, thành công và nổi tiếng nhờ hương vị đặc biết, mịn màng mà hấp dẫn.', 'Khi tiến trình chưng cất đã xong, eau-de-vie được đổ vào những thùng chứ làm bằng gỗ sồi và đưa xuống hầm tối cho nó nằm ngủ yên ở đó ít nhất là vài ba năm. Đây là thời kỳ ủ rượu.\r\nTrong khoảng thời gian này, rượu sẽ dần dần ngả sang màu vàng vì được ngâm chất gỗ từ thùng chứa tiết ra. Đồng thời chất alcohol cũng dịu bớt đi, trầm lắng xuống, chứ không nồng gắt như lúc ban đầu.\r\nNhư vậy, thùng gỗ sồi cũng là một thành phần quan yếu trong tiến trình làm ra rượu Cognac. Nhưng gỗ sồi phải là thứ của Pháp, loại Limousin hoặc Troncais, chứ sồi của Mỹ không thơm bằng. Thùng gỗ vừa được làm xong, người ta đốt lửa cháy bùng bùng trong đó. Khi gỗ bị hun như vậy, mặt trong của thùng bị thiêu xém đi một phần. Chính những chỗ cháy xém gần thành than này góp phần tạo cho eau-de-vie cài này màu đỏ như Hồng Ngọc (Ruby) sau mấy năm ngâm trong thùng.\r\nĐến công đoạn này thì cần phải có tài khéo vào kinh nghiệm của các chuyên viên pha chế mới có thể tạo ra những chai Cognac với tính chất đặc biệt và đống nhất trước sau như m ột của mỗi nhà sản xuất.\r\nRượu Cognac còn có một đặc điểm nữa là nó rất dễ bay hơi. Mặc dầu eau-de-vie đã được đổ thật đầy vào những thùng gỗ có đậy nút kín nhưng bưng, nhưng khi mở nút ra để kiểm soát lại sau một năm yên nghỉ, người ta thấy rượu vẫn bị hao hụt đi từ 3% đến 5%, hệt như có ai lấy trộm. Đó là vì rượu thấm qua các thớ gỗ, gặp không khí thì bay lên thơm ngào ngạt khắp tỉnh Cognac.\r\nHồi xưa, những người làm rượu không hiểu tại sao nên bảo nhau rằng chắc các thành thiên thần ở trên trời ngửi thấy mùi như Cognac hấp dẫn quá nên bay xuống uống mất một phần. Vì vậy mà người ta gọi phần rượu bị hao hụt do hiện tượng bốc hơi là Phần Của Các Thiên Thần.', 1000, 4, 98, 0, 0, 6),
(37, 'Hennessy VSOP 1500 ml', 'Hennessy VSOP (Very Superior Old Pale) là sự pha trộn tổng hợp của hơn 60 loại eau-de-vie khác nhau được ủ trong những thùng gỗ sồi lâu năm.', 'Hennessy VSOP (Very Superior Old Pale) là sự pha trộn tổng hợp của hơn 60 loại eau-de-vie khác nhau được ủ trong những thùng gỗ sồi lâu năm. Khác với Hennessy Xo , Hennessy VSOP có màu sắc vàng nâu , là sự pha trộn của vị gỗ sồi và vị cay . Bên cạnh đó , người uống còn có thể cảm nhận được hương vị của mùi mật ong và cam thảo\r\n\r\nHennessy VSOP, Năm 1817, Đức Vua tương lai George IV của nước Anh (khi đó chưa lên ngôi) đã đề nghị Hennessy cung cấp cho Ngài một loại rượu mà ông mô tả theo đặt hàng là “Very Superior, Old and Pale cognac” và thế là Hennessy đã sản xuất loại rượu viết tắt theo đặt hàng của Hoàng Gia Anh là “V.S.O.P.” (V = Very, S = Superior, O = Old, P = Pale)\r\n\r\nĐến thế kỷ 19 , nhãn hiệu rượu Hennessy V.S.O.P. pha chế với khoảng 60 loại rượu nho “Aux-de-vie” cao tuổi tối thiểu 15 năm và chỉ dùng nho của 4 vườn nho hàng đầu trong khu vực Cognac mà thôi', 1100, 4, 98, 0, 0, 6),
(38, 'Hennessy XO', 'Hennessy XO 70cl / 40% là dòng Cognac lâu đời , được đóng chai đầu tiên vào năm 1870 bởi Maurice Hennessy dành cho Gia đình và Bạn bè .', 'ĐẶC ĐIỂM RƯỢU HENNESSY XO :\r\n\r\n– Dung tích : 700 ml\r\n\r\n– Nồng độ : 40 %\r\n\r\n– Mầu rượu : Mầu vàng hổ phách đậm\r\n\r\n– Nguồn gốc xuất xứ : Rượu Cognac , Nhập khẩu Pháp\r\n\r\n– Hương vị : nồng nàn phong phú trong hương liệu trái cây được làm khô với các vị như mận hoặc quả vả , cảm giác như vụt qua bạn. Đến những ngụm thứ hai ta có thể thấy đặc hơn với sô cô la và hạt tiêu đen , hương quế già , đinh hương và bạch đậu khấu cùng các loại gia vị\r\n\r\n– Vị : Rất là cân bằng trong vòm miệng , Hennessy XO khẳng định hương liệu được phát hiện bởi hương thơm của trái cây khô và sô cô la . Thanh lịch và mạnh mẽ , nó cho thấy sự cân bằng , tròn và hòa hợp giữa các hương liệu được nhấn mạnh bởi sức mạnh của nước hoa thực vật làm từ gỗ sồi . Một hương vị đáng yêu lâu sau khi được enrobed trong nhung , trao các ghi chú ngọt ngào nhất của quế và vani\r\n\r\n– Phong cách của Hennessy XO : Một Cognac Mạnh mẽ , Hài hòa thanh lịch , Nam tính với vẻ hào nhoáng đến nao lòng', 1000, 4, 98, 0, 0, 6),
(39, 'Hennessy X.O 1500 ml', 'Hennessy XO là rượu Cognac XO đầu tiên ra đời vào năm 1870, mạnh mẽ và giàu hương vị Hennessy X.O', 'Đặc điểm\r\n\r\nNồng nàn, có nhiều chất cốt và phức cảm, Hennessy XO là sự kết hợp giữa vị cay của cây sồi, da thuộc cùng với hương hoa dịu ngọt và trái cây chín mọng. Ấn tượng đầu tiên chính là hương vị mạnh mẽ của hạt tiêu và racio sau nhiều năm loại rượu này được chưng cất. Cân bằng, phức cảm với dư vị sâu lắng kéo dài, đó chính là Hennessy XO.\r\n\r\nCách thưởng thức\r\n\r\nMột cách truyền thống, X.O được thưởng thức trong những bữa năn nhẹ. Tuy nhiên, ngày càng có nhiều người khám phá ra những nét độc đáo và thích thú khác của X.O khi thưởng thức với đá. Đơn giản là bỏ thêm 1 hoặc 2 viên đá, lắc nhẹ và càm nhận những hương thơm tuyệt vời.', 1300, 4, 90, 0, 0, 6),
(40, 'Hennessy VSOP', 'Hennessy VSOP\r\nMã sản phẩm: HENN– 1200\r\n\r\nGiá: Xin liên hệ\r\n\r\nHotline 1: 08686 38888\r\n\r\nHotline 2: 09686 77777\r\n\r\nGiới Thiệu\r\n\r\nLấy cảm hứng từ một loại rượu Cognac tạo ra vào năm 1817 để đáp ứng với ', 'Hennessy VSOP là sự pha trộn tổng hợp của hơn 60 loại rượu chưng cất ( Eau-De-Vie ) khác nhau được ủ trong những thùng gỗ Sồi lâu năm . Khác với Hennessy XO , Hennessy VSOP có màu sắc vàng nâu , là sự pha trộn của vị gỗ Sồi và vị cay . Bên cạnh đó , Người uống còn có thể cảm nhận được hương vị của Mật ong , Cam thảo , đan xen bởi hương của lá Đinh hương và Quế , đặc trưng bởi sự cân bằng hài hòa và kết thúc êm mượt\r\n\r\nLấy cảm hứng từ một Cognac tạo ra vào năm 1817 để đáp ứng với yêu cầu của vị Vua tương lai của nước Anh , George IV . Hennessy VSOP đã xây dựng danh tiếng của mình trên gần 2 Thế kỷ . Hôm nay Hennessy VSOP đã trở thành như là Cognac VSOP yêu thích nhất trên Thế giới , và được công nhận bởi sự pha trộn hài hòa cùng cấu trúc của nó . Từ đó di sản này luôn được tôn kính bởi những “Người sành rượu” trên toàn Thế giới\r\n\r\nDung tích : 700 ml\r\n\r\nNồng độ : 40 %\r\n\r\nMầu rượu : Vàng nâu\r\n\r\nQuy cách : 12 Chai / Thùng\r\n\r\nNguồn gốc xuất xứ : Hãng sản xuất Hennessy Moet _ CH Pháp\r\n\r\nMùi : Hương thơm của gỗ Sồi , Mật ong , Cam thảo , Lá đinh hương và Quế\r\n\r\nVị : Cân bằng , hài hòa với vị ngọt mật của trái cây\r\n\r\nKết thúc : êm mượt', 1400, 4, 99, 0, 0, 6),
(41, 'Russian Gold 500ml', 'Hiện nay, rượu Vodka Russian Gold không chỉ là thương hiệu Vodka cao cấp hàng đầu Nga, trở thành biểu tượng bản cho sự phồn thịnh và hiện đại trên thị trường thế giới.', 'Loại rượu: Vodka Nga\r\nTên: Rượu Russian Gold\r\nNồng độ: 40%\r\nDung tích: 0.5L\r\nNhà sản xuất:\r\nQuốc Gia: Russian\r\n\r\nVodka Russian Gold “cơn lốc” dẫn đầu xu thế vodka ngon\r\nHiện nay, rượu Vodka Russian Gold không chỉ là thương hiệu Vodka cao cấp hàng đầu Nga, trở thành biểu tượng bản cho sự phồn thịnh và hiện đại trên thị trường thế giới, Vodka Russian Gold còn là sản phẩm nổi bật nhất trên thị trường rượu ngoại nhập khẩu cao cấp thế giới.', 1000, 5, 98, 0, 0, 7),
(42, 'Russian Gold 750ml', 'Hiện nay, rượu Vodka Russian Gold không chỉ là thương hiệu Vodka cao cấp hàng đầu Nga, trở thành biểu tượng bản cho sự phồn thịnh và hiện đại trên thị trường thế giới', 'Thông tin rượu:\r\nLoại rượu: Vodka Nga\r\nTên: Rượu Russian Gold\r\nNồng độ: 40%\r\nDung tích: 0.75L\r\nNhà sản xuất:\r\nQuốc Gia: Russian\r\n\r\nVodka Russian Gold “cơn lốc” dẫn đầu xu thế vodka ngon\r\nHiện nay, rượu Vodka Russian Gold không chỉ là thương hiệu Vodka cao cấp hàng đầu Nga, trở thành biểu tượng bản cho sự phồn thịnh và hiện đại trên thị trường thế giới, Vodka Russian Gold còn là sản phẩm nổi bật nhất trên thị trường rượu ngoại nhập khẩu cao cấp thế giới.', 1150, 5, 97, 0, 0, 7),
(43, 'Diplomat Classic', 'Rượu Vodka Diplomat clasic nổi bật bởi sự tinh khiết, chất lượng cao, được loc qua nhiệt lần để hạn chế những độc tố có hại cho sức khỏe', 'Thông tin rượu:\r\nLoại rượu: Vodka Nga\r\nTên: Rượu Vodka Diplomat\r\nNồng độ: 40%\r\nDung tích: 0.50L\r\nNhà sản xuất:\r\nQuốc Gia: Russian\r\n\r\nRượu Vodka Diplomat : Nguyên tắc chất lượng cao “liux” được sử dụng trong sản xuất . Được thanh lọc nhiều lần .Đây là nhà máy duy nhất được trang bị cột thanh lọc đặc biệt , gọi là “chiếc đĩa” lọc ra sản phẩm chất lượng hoàn hảo.\r\nRuou vodka Diplomat sử dụng Công nghệ hiện đại phức tạp, than bạch dương được phân loại theo một quy định đặc biệt. Điều này giúp quá trình oxy hóa cho kết quả tối ưu , loại bỏ tối đa các tạp chất có hại cho sức khỏe.\r\n\r\nRượu Vodka Diplomat clasic là vodka thể hiện rõ nét đặc biệt, là vodka ưu tú, với sự cân bằng tuyệt vời không thể so sánh. Hương thơm tinh tế, hương vị nhẹ, đó là một kiệt tác do bột yến và đường hoa quả (fructose) tạo ra.\r\n\r\nDiplomat- Quan hệ ngoại giao hữu nghị, đó là ý tưởng cơ bản của rượu Dipmat vodka.Điều này được xác nhận bởi hình dạng tinh khiết, tinh tế của vỏ chai, và sự hiện diện của lá cờ câu lạc bộ quốc tế Great eights. Rượu Vodka Diplomat nhập khẩu từ liên bang Nga, nồng độ 40 % Alcohol.', 1200, 5, 98, 1, 0, 7),
(44, 'Vodka Sa hoàng Tuyết vàng – CZAR’S GOLDEN SNOW', 'Vodka Sa Hoàng Tuyết Vàng CZAR’S GOLDEN SNOW là sản phẩm đặc biệt của dòng Vodka Imperial. Goldan Snow được pha chế với vàng lá 23k có tác dụng giải độc và chống đột quỵ.', 'Loại rượu: Vodka Nga\r\nTên: Vodka Sa hoàng  Tuyết vàng – CZAR’S GOLDEN SNOW\r\nNồng độ: 40%\r\nDung tích: 0.70L\r\nNhà sản xuất:\r\nQuốc Gia: Russian\r\nĐẶC ĐIỂM CỦA VODKA GOLDEN SNOW :\r\n\r\n– Đóng chai : 700 ml\r\n\r\n– Nồng độ : 40%\r\n\r\n– Thành phần đặc biệt : Dăm bào vàng lá 24K\r\n\r\n– Vỏ chai rượu : Được làm bằng thủy tinh y tế tinh khiết\r\n\r\n– Họa tiết trang trí trên vỏ chai : Mạ vàng 24K , dưới bức chân dung Pie Đại để mặc áo giáp là hình đại bàng 2 đầu biểu tượng của nhà nước Nga\r\n\r\n– Quy cách đóng chai : 6 Chai/ Thùng\r\n\r\n– Sản xuất và đóng chai tại : Tập đoàn LADOGA _ CHLB Nga\r\n\r\n– Vodka Golden Snow được bán độc quyền tại các cơ sở bán lẻ chuyên nghành là các Cửa hàng rượu và Của hàng quà tặng đắt tiền\r\n\r\n– Rượu Vodka Sa hoàng tuyết vàng – Golden Snow có nồng độ chuẩn của Vodka Nga là 40 % , dung tích duy nhất là 700 ml được pha chế với những lá vàng thực phẩm 24 K . Sản phẩm được sản xuất từ nguồn nguyên liệu tốt nhất cùng kinh nghiệm lâu đời và công nghệ tối tân của nước Nga', 1050, 5, 90, 0, 0, 7),
(45, 'BELUGA GOLD LINE', 'Rượu vodka BELUGA GOLD LINE được đặt theo tên một loại cá tầm có giá trị thương hiệu rất cao ở Nga.', 'ượu được chiết xuất hoàn toàn thủ công với công thức độc nhất. Một trong những yếu tố đặc trưng của Beluga là công thức sử dụng nước tinh khiết từ dòng Siberian và tinh dầu mạch nha được làm từ các enzim mạch nha đã quan tinh luyện tạo nên vị ngon đặc trưng.\r\nLà dòng sản phẩm cao cấp nhất của hãng rượu vodka Beluga, thay mặt thương hiệu nổi tiếng toàn cầu này chúng tôi giới thiệu đến quý khách vodka Beluga Gold line Hộp da hay còn gọi là Beluga Gold.\r\n\r\nNói đến hãng rượu vodka này thì có lẽ người dân Nga ai cũng biết, nó là một thương hiệu có giá trị thương mại cao. Với biểu tượng là chú cá tầm Beluga Gold Line đã quá quen thuộc với người Nga, họ sử dụng Beluga trong những bữa tiệc gia đình hay tiệc quan trọng bởi Beluga có giá thành khá cao nên không sử dụng hàng ngày. Đặc biệt với Beluga Gold line thì sự sử dụng thường xuyên hàng ngày lại càng không bởi giá thành khá cao, tuy vậy khi cần thì người dân Nga vẫn luôn chọn Beluga Gold line làm sự lựa chọn hàng đầu. Hương vị dịu dàng êm ái cùng với thiết kế hộp da sang trọng, đây là chiếc hộp da được sản xuất theo phương pháp thủ công tinh xảo khiến giá trị của Beluga Gold Line càng được khẳng định thêm. Đi kèm với hộp da là một chiếc búa, bởi trên nắp chai của Beluga Gold Line được gắn lớp xi cứng và chiếc búa là công cụ để gõ nắp xi cứng vỡ ra. Lớp xi cứng trên nắp Beluga Gold Line là sự sáng tạo về chống hàng giả và cách thiết kế độc đáo chưa từng loại rượu vodka nga nào có trước đó.', 1000, 5, 90, 0, 0, 7),
(46, 'Là dòng sản phẩm cao cấp nhất của hãng rượu vodka Beluga, thay mặt thương hiệu nổi tiếng toàn cầu nà', 'Rượu vodka White Gold True Original xuất xứ Russia', 'Thông tin rượu:\r\n\r\nLoại rượu: Vodka Nga\r\nTên: White Gold True Original\r\nNồng độ: 40%\r\nDung tích: 0.5L\r\nNhà sản xuất:\r\nQuốc Gia: Russian\r\nVodka White Gold True Original ngon “lụy” nguyên liệu chất lượng\r\nVodka White Gold True Original cao cấp được tinh cất từ những dòng nguyên liệu đặc biệt trải qua quá trình chọn lọc kĩ lưỡng, tỉ mỉ và nghiêm ngặt. Dòng rượu vodka nga ngon này hiện đang phân phối và yêu thích ở trên 128 quốc gia.', 900, 5, 90, 0, 0, 7),
(47, 'White Gold True Original 750ml', 'Rượu vodka White Gold True Original xuất xứ Russia', 'Thông tin rượu:\r\nLoại rượu: Vodka Nga\r\nTên: White Gold True Original\r\nNồng độ: 40%\r\nDung tích: 0.75L\r\nNhà sản xuất:\r\nQuốc Gia: Russian\r\nVodka White Gold True Original ngon “lụy” nguyên liệu chất lượng\r\nVodka White Gold True Original cao cấp được tinh cất từ những dòng nguyên liệu đặc biệt trải qua quá trình chọn lọc kĩ lưỡng, tỉ mỉ và nghiêm ngặt. Dòng rượu vodka nga ngon này hiện đang phân phối và yêu thích ở trên 128 quốc gia.', 1000, 5, 92, 0, 0, 7),
(48, 'White Gold True Original 1750ml', 'Rượu vodka White Gold True Original xuất xứ Russia', 'Thông tin rượu:\r\nLoại rượu: Vodka Nga\r\nTên: White Gold True Original\r\nNồng độ: 40%\r\nDung tích: 1750 ml\r\nNhà sản xuất:\r\nQuốc Gia: Russian', 1000, 5, 95, 3, 0, 7),
(49, 'White Gold Premium 500ml', 'Rượu vodka White Gold Premiựm 500ml xuất xứ Russia', 'Vodka White Gold Premium – dòng vodka cao cấp\r\nDòng nước tinh khiết chất lượng bạc rất cao tại Taiga nguyên thủy được chọn làm rượu Vodka White Gold Premium cao cấp, chính vì thế  không chỉ được thanh lọc kĩ càng về độ cồn, an toàn thực phẩm mà còn có tác dụng thanh lọc cơ thể. Đây được đánh giá là dòng rượu vodka nga cao cấp.\r\nHương vị Vodka White Gold Premium “hớp hồn” dân yêu rượu vodka\r\nCác chuyên gia vodka đánh giá về hương vị Vodka White Gold Premium 500ml êm ái, thơm ngon hơn hẳn các loại Vodka Nga tại Hà Nội, một dư vị đậm đà kéo dài, đem lại niềm hứng khởi bất tận.', 1600, 5, 99, 1, 0, 7),
(50, 'White Gold Premium 750ml', 'Rượu vodka White Gold Premiựm 750ml xuất xứ Russia', 'Vodka White Gold Premium – dòng vodka cao cấp\r\nDòng nước tinh khiết chất lượng bạc rất cao tại Taiga nguyên thủy được chọn làm rượu Vodka White Gold Premium cao cấp, chính vì thế  không chỉ được thanh lọc kĩ càng về độ cồn, an toàn thực phẩm mà còn có tác dụng thanh lọc cơ thể. Đây được đánh giá là dòng rượu vodka nga cao cấp.\r\nVodka White Gold Premium nhân đôi mọi cuộc vui\r\nVodka White Gold Premium sẽ là sự lựa  chọn thông minh, rất thích hợp dùng cho các bữa ăn, liên hoan hay đơn giản chỉ uống suông. Khi thưởng thức, sẽ được tận hưởng một hương vị Vodka cao cấp êm ái, dư vị đậm đà kéo dài, đem lại niềm hứng khởi bất tận…\r\nHương vị Vodka White Gold Premium “hớp hồn” dân yêu rượu vodka\r\nCác chuyên gia vodka đánh giá về hương vị Vodka White Gold Premium 500ml êm ái, thơm ngon hơn hẳn các loại Vodka Nga tại Hà Nội, một dư vị đậm đà kéo dài, đem lại niềm hứng khởi bất tận.', 1000, 5, 90, 1, 0, 7);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `f_ID` int(11) NOT NULL,
  `f_Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_Password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `f_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_DOB` date NOT NULL,
  `f_Permission` int(11) NOT NULL,
  `f_Adress` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`f_ID`, `f_Username`, `f_Password`, `f_Name`, `f_Email`, `f_DOB`, `f_Permission`, `f_Adress`) VALUES
(1, '1512414', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'sadasd', 'dsadasdsa', '2018-06-21', 0, ''),
(2, '1512414', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'NgÃ´ Minh Phá»¥ng', 'nomipu2015@gmail.com', '1997-12-14', 0, ''),
(3, 'nomipu', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'Phá»¥ng Minh', 'nomiu@yahoo.com', '2018-06-28', 0, ''),
(4, 'nomipu1', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'phá»¥ng', 'sdasda@gmail.com', '2018-06-14', 0, ''),
(5, 'nomipu', '054e3b308708370ea029dc2ebd1646c498d59d7203c9e1a44cf0484df98e581a', 'aaa', 'nomypu@yahoo.com', '2018-06-13', 0, ''),
(6, 'nomipu1', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'Minh Phá»¥ng', 'nomipu2018@gmail.com', '2018-06-11', 0, ''),
(7, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'Minh Phá»¥ng', 'mipu.itus@gmail.com', '2018-06-12', 0, ''),
(8, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'Ã¡dasdad', 'nomypu@yahoo.com', '2018-06-03', 0, ''),
(9, 'nomipussss', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'sadasd', 'aaaaad@gmail.com', '2018-06-20', 0, ''),
(10, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', '1212sadasd', 'faaaaaaaf@aaaa.com', '2018-06-12', 0, ''),
(11, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'asdasd', 'sadsad@gmail.com', '2018-06-04', 0, ''),
(12, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'asdasd', 'mipu.itus@gmail.com', '2018-06-04', 0, ''),
(13, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'asdsad', 'nomypu@yahoo.com', '2018-06-20', 0, ''),
(14, 'nomipu3', '3e0eae1c969e252127ea57c61cdcc11d199c151465ea50661066727103c560d9', 'NgÃ´ Minh Phá»¥ng', 'mipu.itus@gmail.com', '2018-06-06', 0, ''),
(15, 'ochimot', '93502315ab2cdff321380d8487859a862d20b6103fa5fccf44562a254fd9b8f7', 'nguyen van ', 'kiemtienol1506@gmail.com', '0000-00-00', 0, '20 duogn 3/2,q.10,tp hcm'),
(16, 'testtest', '37268335dd6931045bdcdf92623ff819a64244b53d0e746d438797349d4da578', 'Minh Phụng', 'nomipu2018@gmail.com', '2018-06-07', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CatID`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`);

--
-- Indexes for table `producers`
--
ALTER TABLE `producers`
  ADD PRIMARY KEY (`ProducerID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`f_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CatID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `ID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `producers`
--
ALTER TABLE `producers`
  MODIFY `ProducerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `f_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
