import { useState, useEffect, useCallback } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { toast } from "react-toastify";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import UpdateCategoryDailog from "../../component/Model/UpdateProductDailog";

const columns = [
  { field: "_id", headerName: "ID", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "createdAt", headerName: "CreatedAt", width: 130 },
];

const Products = () => {
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  const { _id } = JSON.parse(sessionStorage.getItem("userDetails"));
  const [userListData, setUserListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [updateId, setUpdateId] = useState("");

  const handleUpdate = useCallback(id => {
    setUpdateId(id);
  }, []);

  const handleDelete = useCallback(
    (id, name) => {
      setIsLoading(true);
      axios
        .delete(`/category/${id}/${_id}`, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          params: {
            name: name,
          },
        })
        .then(data => {
          if (data.status === 200) {
            toast.success("Successfully Deleted");
            setIsLoading(false);
            setRefresh(prev => !prev);
          }
        })
        .catch(error => console.log(error));
    },
    [_id, accessToken],
  );

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("/products", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then(res => {
        setUserListData(res?.data?.items);
      });
  }, [accessToken, refresh]);
  return (
    <Box style={{ height: 400, width: "100%" }} p={5}>
      <UpdateCategoryDailog
        setUpdateId={setUpdateId}
        updateId={updateId}
        setRefresh={setRefresh}
        setIsLoading={setIsLoading}
      />
      <TableContainer
        component={Paper}
        elevation={2}
        sx={{
          maxHeight: "calc(100vh - 200px)",
          minWidth: 250,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ height: "5%" }}>
              {columns?.map(cell => (
                <TableCell
                  key={cell?.field}
                  align='left'
                  width='5%'
                  sx={{ backgroundColor: "#EFF2F7" }}
                >
                  {cell?.headerName}
                </TableCell>
              ))}
              <TableCell
                align='left'
                sx={{ backgroundColor: "#EFF2F7" }}
                width='5%'
              >
                Update
              </TableCell>
              <TableCell
                align='left'
                sx={{ backgroundColor: "#EFF2F7" }}
                width='5%'
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2}>
                  <Typography p={5} textAlign='center'>
                    <CircularProgress />
                  </Typography>
                </TableCell>
              </TableRow>
            ) : userListData.length ? (
              userListData.map((user, index) => (
                <TableRow key={index}>
                  {columns.map(({ field, width }) => (
                    <TableCell
                      key={field}
                      component='th'
                      scope='row'
                      align='left'
                      width='10%'
                    >
                      {user[field]}
                    </TableCell>
                  ))}
                  <TableCell
                    component='th'
                    scope='row'
                    align='left'
                    width='10%'
                  >
                    <Tooltip title='Update'>
                      <IconButton
                        size='small'
                        onClick={() => handleUpdate(user._id)}
                      >
                        <ModeEditIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    component='th'
                    scope='row'
                    align='left'
                    width='10%'
                  >
                    <Tooltip title='Delete'>
                      <IconButton
                        size='small'
                        onClick={() => handleDelete(user._id, user.name)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 2}>
                  <Typography p={5} textAlign='center'>
                    NO Data Available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;
