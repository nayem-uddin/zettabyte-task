"use client";

import { useState } from "react";
import { useFetch } from "../lib/customHooks";
import { User } from "../lib/definitions";
import EmptyDataMessage from "./emptyDataMessage";
import TableHead from "./tableHead";
import TableRow from "./tableRow";
import { easeInOut, motion } from "motion/react";
import Modal from "./modal";
export default function UsersList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<User | null>(null);
  const users = useFetch<User>("users");
  const durationInSec = 1;
  const delayInSec = 0;
  const totalUsers = users?.length;
  function handleModalDisplay(user: User) {
    setSelectedRow(user);
    setShowModal(true);
  }
  return (
    <>
      <motion.table
        className="w-full border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: durationInSec,
          ease: easeInOut,
          delay: delayInSec,
        }}
      >
        {users !== null &&
          ((totalUsers && (
            <>
              <TableHead />
              <tbody>
                {users?.map((user) => (
                  <TableRow
                    key={user.id}
                    {...user}
                    handleModalDisplay={handleModalDisplay}
                  />
                ))}
              </tbody>
            </>
          )) ||
            (!totalUsers && <EmptyDataMessage />))}
      </motion.table>
      {showModal && (
        <>{selectedRow && <Modal {...selectedRow} setShow={setShowModal} />}</>
      )}
    </>
  );
}
