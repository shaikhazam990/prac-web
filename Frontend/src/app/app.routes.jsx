const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/tasks/:id" element={<TaskDetail />} />
    </Routes>
  );
};

export default AppRoutes;