import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React from "react";
import { useLocalContext } from "../../context/context";
import { useState } from "react";
import "./styles.css";
import Form from "./Form";

const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  const [checked, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createClassDialog}
        maxWidth={showForm ? 'lg' : 'xs'}
      >
        {showForm ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Using classroom at a school with students?
            </div>
            <DialogContent className="class__content">
              <p className="class__text">
                <p>If so, your school must be sign up for a free</p>
                <a href="/help" className="class__link">
                  G Suite for Education
                </a>
                account before you can use Classroom
                <a href="/learn" className="class__link2">
                  Learn more.
                </a>
              </p>
              <p>
                G Suite for Education lets schools decide which Google services
                their students can use, and provides additional
                <a href="/privacy" className="class__link2 class__link">
                  privacy and security
                </a>
                protections that are important in a school setting. Students
                cannot use Google Classroom at a school with personal accounts.
              </p>
              <div className="class__checkboxWrapper">
                <Checkbox
                  color="primary"
                  onChange={() => setChecked(!checked)}
                />
                <p>
                  I've read and understand the above notice, and I'm not using
                  Classroom at a school with students
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                Close
              </Button>
              <Button
                autoFocus
                color="primary"
                disabled={!checked}
                onClick={() => setShowForm(true)}
              >
                Continue
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default CreateClass;
