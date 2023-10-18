import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://www.euronics.it/dw/image/v2/BFPN_PRD/on/demandware.static/-/Sites-catalog_euronics_master/default/dwf0773746/hi-res/212015788_8.jpg?sw=1000&q=90&strip=false",
            customer: "John Smith",
            date:"1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98368430?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720",
            customer: "Michael Doe",
            date:"1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 234353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71b5QMOAGbS.__AC_SX300_SY300_QL70_ML2_.jpg",
            customer: "John Smith",
            date:"1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://static1.unieuro.it/medias/sys_master/root/had/hd1/34863455305758/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-5ee2840d634e4886440d8482970bbc25-preview-sgmConversionBaseFormat-sgmProductFormat.jpg",
            customer: "Jane Smith",
            date:"1 March",
            amount: 920,
            method: "Online",
            status: "Approved"
        },
        {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://cdn.nexths.it/scheda_prodotto/image/med/g834jy-n6048w.jpg",
            customer: "Harold Carol",
            date:"1 March",
            amount: 2000,
            method: "Online",
            status: "Pending"
        }

    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell  className="tableCell">Product</TableCell>
                        <TableCell  className="tableCell">Customer</TableCell>
                        <TableCell  className="tableCell">Date</TableCell>
                        <TableCell  className="tableCell">Amount</TableCell>
                        <TableCell  className="tableCell">Payment Method</TableCell>
                        <TableCell  className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell className="tableCell">{row.id}</TableCell>
                        <TableCell className="tableCell">
                            <div className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                {row.product}
                            </div>
                        </TableCell>
                        <TableCell className="tableCell">{row.customer}</TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">{row.amount}</TableCell>
                        <TableCell className="tableCell">{row.method}</TableCell>
                        <TableCell className="tableCell">
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
    )
}

export default List;