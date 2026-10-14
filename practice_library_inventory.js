let bookCatalog = [
  {
    bookCode: "B01",
    title: "Lập trình JavaScript",
    category: "CNTT",
    price: 120000,
    totalCopies: 10,
    availableCopies: 5,
    shelfLocation: "A01",
  },
  {
    bookCode: "B02",
    title: "Lão Hạc",
    category: "CNTT",
    price: 150000,
    totalCopies: 8,
    availableCopies: 0,
    shelfLocation: "A02",
  },
  {
    bookCode: "B03",
    title: "Doraemon",
    category: "CNTT",
    price: 180000,
    totalCopies: 6,
    availableCopies: 3,
    shelfLocation: "B01",
  },
];

let choice = 0;
do {
  choice = Number(
    prompt(`=== QUẢN LÝ KHO SÁCH ===
1. Nhập sách mới
2. Mượn sách
3. Thanh lý sách hỏng
4. Kiểm kê kho sách
5. Thoát
Chọn chức năng:`),
);

  switch (choice) {
    case 1: {
      let bookCode = prompt("Mã sách:").trim().toUpperCase();
      let found = false;
      for (let i = 0; i < bookCatalog.length; i++) {
        if (bookCatalog[i].bookCode === bookCode) {
          found = true;
          break;
        }
      }

      if (found || bookCode === "") {
        console.log("Mã sách không hợp lệ hoặc đã tồn tại");
        break;
      }

      let title = prompt("Tên sách:").trim();
      let category = prompt("Thể loại:").trim();
      let price = Number(prompt("Giá sách:"));
      let totalCopies = Number(prompt("Tổng số cuốn:"));
      let shelfLocation = prompt("Vị trí kệ:").trim().toUpperCase();

      if (!title || !category || !shelfLocation || price <= 0 || totalCopies <= 0 || isNaN(price) || isNaN(totalCopies)) {
        console.log("Thông tin sách không hợp lệ");
        break;
      }

      bookCatalog.push({
        bookCode: bookCode,
        title: title,
        category: category,
        price: price,
        totalCopies: totalCopies,
        availableCopies: totalCopies,
        shelfLocation: shelfLocation
      });
      console.log("Thêm sách thành công");
      break;
    }

    case 2: {
      let code = prompt("Mã sách cần mượn:").trim().toUpperCase();
      let found = false;

      for (let i = 0; i < bookCatalog.length; i++) {
        let book = bookCatalog[i];

        if (book.bookCode === code) {
          found = true;

          if (book.availableCopies > 0) {
            book.availableCopies--;
            console.log("Mượn sách thành công");

            if (book.availableCopies === 0) {
              console.log("HẾT SÁCH TRÊN KỆ");
            }
          } else {
            console.log("Sách đã hết trên kệ!");
          }
          break;
        }
      }

      if (!found) {
        console.log("Không tìm thấy sách!");
      }
      break;
    }

    case 3: {
      let code = prompt("Mã sách cần thanh lý:").trim().toUpperCase();
      let found = false;
      for (let i = 0; i < bookCatalog.length; i++) {
        if (bookCatalog[i].bookCode === code) {
          bookCatalog.splice(i, 1);
          found = true;
          console.log("Thanh lý sách thành công!");
          break;
        }
      }

      if (!found) {
        console.log("Không tìm thấy sách!");
      }
      break;
    }

    case 4: {
      let totalCopies = 0;
      let totalAvailable = 0;
      let totalAssets = 0;
      for (let i = 0; i < bookCatalog.length; i++) {
        let book = bookCatalog[i];
        console.log(book);

        if (book.availableCopies === 0) {
          console.log("HẾT SÁCH TRÊN KỆ");
        }

        totalCopies += book.totalCopies;
        totalAvailable += book.availableCopies;
        totalAssets += book.totalCopies * book.price;
      }

      console.log(`Tổng đầu sách: ${bookCatalog.length}`);
      console.log(`Tổng số cuốn: ${totalCopies}`);
      console.log(`Số cuốn còn trên kệ: ${totalAvailable}`);
      console.log(`Tổng giá trị tài sản: ${totalAssets} VNĐ`);
      break;
    }

    case 5:
      console.log("Thoát chương trình");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choice !== 5);
