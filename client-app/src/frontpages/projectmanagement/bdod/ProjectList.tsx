import React, { useContext, useState } from "react";
import {
  Item,
  Button,
  Label,
  Segment,
  Table,
  Menu,
  Icon,
  Dropdown,
  Confirm,
  Container,
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ProjectStore from "../../../app/stores/projectStore";
import { Link } from "react-router-dom";

const ProjectList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");
  const projectStore = useContext(ProjectStore);
  const {
    projectsByDate: projectsByDate,
    deleteProject: deleteProject,
    submitting,
    target,
  } = projectStore;
  return (
    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project Code</Table.HeaderCell>
            <Table.HeaderCell>Job Type</Table.HeaderCell>
            <Table.HeaderCell>Order Number</Table.HeaderCell>
            <Table.HeaderCell width={1}>Status</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell width={1}>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {projectsByDate.map((project) => (
            <Table.Row key={project.id}>
              <Table.Cell>
                <Label>{project.projectCode}</Label>
              </Table.Cell>
              <Table.Cell>{project.jobType}</Table.Cell>
              <Table.Cell> {project.orderNumber}</Table.Cell>
              <Table.Cell>{project.status}</Table.Cell>
              <Table.Cell>{project.address}</Table.Cell>
              <Table.Cell>
                <Button.Group size="mini">
                  <Button
                    as={Link}
                    to={`/projectmanagement/project/${project.id}`}
                    size="mini"
                    icon="zoom in"
                    color="blue"
                    title="View"
                  />
                  <Button
                    name={project.id}
                    size="mini"
                    loading={target === project.id && submitting}
                    //onClick={(e) => deleteProject(e, project.id)}
                    onClick={() => {
                      setOpen(true);
                      setProjectId(project.id);
                    }}
                    icon="delete"
                    color="red"
                    title="Delete"
                  />
                  <Confirm
                    open={open}
                    onCancel={() => setOpen(false)}
                    onConfirm={(e) => {
                      deleteProject(projectId);
                        setOpen(false);
                    }}
                    content="Are you sure you want to delete ?"
                    confirmButton="Yes"
                    size="mini"
                    style={{
                      position: "relative",
                      maxHeight: "150px",
                      height: "auto",
                    }}
                  />
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
};

export default observer(ProjectList);
